
const db = require("../db");

/* ================= ACADEMICS LISTING ================= */

exports.getAcademics = (req, res) => {
  // Query heading first
  db.query("SELECT * FROM academics_section WHERE id=1", (err, section) => {
    if (err) return res.status(500).json(err);
    
    // Then query active programs
    db.query("SELECT * FROM academics_programs WHERE status=1 ORDER BY sort_order ASC", (err2, programs) => {
      if (err2) return res.status(500).json(err2);
      
      res.json({
        heading: section[0]?.heading || "",
        subHeading: section[0]?.sub_heading || "",
        programs: programs || []
      });
    });
  });
};

exports.updateAcademicsSection = (req, res) => {
  const { heading, subHeading } = req.body;

  db.query(
    `UPDATE academics_section SET heading=?, sub_heading=? WHERE id=1`,
    [heading, subHeading],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Academics section updated" });
    }
  );
};

// exports.addProgram = (req, res) => {
//   const { title, description } = req.body;
//   const image = req.file
//     ? `/uploads/academics/${req.file.filename}`
//     : null;

//   db.query(
//     `INSERT INTO academics_programs (title, description, image)
//      VALUES (?, ?, ?)`,
//     [title, description, image],
//     err => {
//       if (err) return res.status(500).json(err);
//       res.json({ message: "Program added" });
//     }
//   );
// };

exports.addProgram = (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/academics/${req.file.filename}` : null;

  db.query(
    `INSERT INTO academics_programs (title, description, image) VALUES (?, ?, ?)`,
    [title, description, image],
    (err, result) => {
      const newPid = result.insertId;
      // INITIALIZE blank rows for this program
      db.query("INSERT INTO academic_details (program_id) VALUES (?)", [newPid]);
      db.query("INSERT INTO academic_foundation (program_id) VALUES (?)", [newPid]);
      db.query("INSERT INTO academic_admission_cta (program_id) VALUES (?)", [newPid]);
      db.query("INSERT INTO academic_faq (program_id) VALUES (?)", [newPid]);
      
      res.json({ message: "Program added and details initialized" });
    }
  );
};


exports.updateProgram = (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `/uploads/academics/${req.file.filename}` : null;

  // Use COALESCE so we don't overwrite with null if no new file is uploaded
  db.query(
    `UPDATE academics_programs SET title=?, description=?, image=COALESCE(?, image) WHERE id=?`,
    [title, description, image, req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Program updated" });
    }
  );
};

exports.deleteProgram = (req, res) => {
  db.query(
    `UPDATE academics_programs SET status=0 WHERE id=?`,
    [req.params.id],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Program deleted" });
    }
  );
};

/* ================= ACADEMICS DETAILS ================= */

// exports.getAcademicDetails = (req, res) => {
//   const programId = req.params.programId;

//   const sql = `
//     SELECT * FROM academic_details WHERE program_id=?
//   `;

//   db.query(sql, [programId], (err, details) => {
//     if (err) return res.status(500).json(err);
//     res.json(details[0] || {});
//   });
// };

exports.getAcademicDetails = (req, res) => {
  const pid = req.params.programId;

  // Fetch Main Details
  db.query("SELECT * FROM academic_details WHERE program_id = ?", [pid], (err, details) => {
    if (err) return res.status(500).json(err);

    // Fetch Foundation Info
    db.query("SELECT * FROM academic_foundation WHERE program_id = ?", [pid], (err, foundation) => {
      const fId = foundation[0]?.id;

      // Fetch Blocks AND Points for Foundation
      const blockQuery = `
        SELECT b.id as block_id, b.title as block_title, p.point 
        FROM academic_foundation_blocks b
        LEFT JOIN academic_foundation_points p ON b.id = p.block_id
        WHERE b.foundation_id = ?
        ORDER BY b.sort_order, p.sort_order`;

      db.query(blockQuery, [fId], (err, blockRows) => {
        // Group points by block
        const blocksMap = {};
        blockRows.forEach(row => {
          if (!blocksMap[row.block_id]) {
            blocksMap[row.block_id] = { title: row.block_title, points: [] };
          }
          if (row.point) blocksMap[row.block_id].points.push(row.point);
        });

        // Fetch FAQ and CTA... (similar logic as you already have)
        db.query("SELECT * FROM academic_faq WHERE program_id = ?", [pid], (err, faq) => {
          db.query("SELECT * FROM academic_faq_items WHERE faq_id = ?", [faq[0]?.id], (err, faqItems) => {
            
            res.json({
              details: details[0] || {},
              foundation: {
                ...foundation[0],
                blocks: Object.values(blocksMap) // This now contains titles AND points
              },
              faq: {
                ...faq[0],
                items: faqItems || []
              },
              cta: { items: [] } // Add your CTA logic here later
            });
          });
        });
      });
    });
  });
};


exports.updateAcademicDetails = (req, res) => {
  const { heroTitle, sectionTitle, description } = req.body;
  const image = req.file
    ? `/uploads/academics/${req.file.filename}`
    : null;

  db.query(
    `UPDATE academic_details 
     SET hero_title=?, section_title=?, description=?, hero_image=COALESCE(?, hero_image)
     WHERE program_id=?`,
    [heroTitle, sectionTitle, description, image, req.params.programId],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Details updated" });
    }
  );
};

/* ================= FOUNDATION ================= */

/* ================= UPDATE FOUNDATION (FIXED DELETE) ================= */


exports.updateFoundation = (req, res) => {
    const { hero_title, hero_description, blocks } = req.body;
    const programId = req.params.programId;

    // 1. Update main table
    db.query(
        "UPDATE academic_foundation SET hero_title=?, hero_description=? WHERE program_id=?",
        [hero_title, hero_description, programId],
        (err) => {
            if (err) return res.status(500).json({ message: "Main update failed", error: err });

            // 2. Get the specific foundation ID
            db.query("SELECT id FROM academic_foundation WHERE program_id=?", [programId], (err, rows) => {
                if (err || !rows.length) return res.status(500).json({ message: "Foundation ID not found" });
                const fId = rows[0].id;

                // 3. DELETE POINTS FIRST (Child table)
                // We delete points belonging to blocks that belong to this foundation
                const deletePointsSql = `
                    DELETE FROM academic_foundation_points 
                    WHERE block_id IN (SELECT id FROM academic_foundation_blocks WHERE foundation_id = ?)
                `;

                db.query(deletePointsSql, [fId], (pointDelErr) => {
                    if (pointDelErr) return res.status(500).json({ message: "Points delete failed", error: pointDelErr });

                    // 4. DELETE BLOCKS SECOND (Parent table)
                    db.query("DELETE FROM academic_foundation_blocks WHERE foundation_id = ?", [fId], (blockDelErr) => {
                        if (blockDelErr) return res.status(500).json({ message: "Blocks delete failed", error: blockDelErr });

                        if (!blocks || blocks.length === 0) return res.json({ message: "Updated (empty blocks)" });

                        // 5. INSERT NEW DATA (Same loop as before)
                        let completedBlocks = 0;
                        blocks.forEach((block, i) => {
                            db.query(
                                "INSERT INTO academic_foundation_blocks (foundation_id, title, sort_order) VALUES (?, ?, ?)",
                                [fId, block.title, i + 1],
                                (insErr, result) => {
                                    if (insErr) return console.error(insErr);
                                    const blockId = result.insertId;

                                    if (block.points && block.points.length > 0) {
                                        const pointValues = block.points.map((p, j) => [blockId, p, j + 1]);
                                        db.query(
                                            "INSERT INTO academic_foundation_points (block_id, point, sort_order) VALUES ?",
                                            [pointValues],
                                            () => checkDone(blocks.length)
                                        );
                                    } else {
                                        checkDone(blocks.length);
                                    }
                                }
                            );
                        });

                        function checkDone(total) {
                            completedBlocks++;
                            if (completedBlocks === total) {
                                res.json({ message: "Foundation updated successfully" });
                            }
                        }
                    });
                });
            });
        }
    );
};
/* ================= CTA ================= */

exports.updateAdmissionCTA = (req, res) => {
  const { heading, subHeading, items } = req.body;
  const programId = req.params.programId;

  db.query(
    `UPDATE academic_admission_cta 
     SET heading=?, sub_heading=? 
     WHERE program_id=?`,
    [heading, subHeading, programId]
  );

  res.json({ message: "CTA updated" });
};

/* ================= FAQ ================= */

/* ================= UPDATE FAQ ================= */

exports.updateFAQ = (req, res) => {
    const { heading, description, items } = req.body;
    const pid = req.params.programId;

    db.query(
        "UPDATE academic_faq SET heading=?, description=? WHERE program_id=?",
        [heading, description, pid],
        () => {
            db.query("SELECT id FROM academic_faq WHERE program_id=?", [pid], (err, rows) => {
                const faqId = rows[0].id;
                db.query("DELETE FROM academic_faq_items WHERE faq_id=?", [faqId], () => {
                    if (!items || items.length === 0) return res.json({ message: "Updated" });

                    const values = items.map((item, i) => [faqId, item.question, item.answer, i + 1]);
                    db.query("INSERT INTO academic_faq_items (faq_id, question, answer, sort_order) VALUES ?", [values], () => {
                        res.json({ message: "FAQ updated" });
                    });
                });
            });
        }
    );
};
