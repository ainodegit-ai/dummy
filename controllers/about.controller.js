const db = require("../db");

/*----------getAboutPage----------*/
exports.getAboutPage = (req, res) => {
  db.query("SELECT * FROM about_main WHERE id=1", (e1, main) => {
    if (e1) return res.status(500).json({ message: "DB error1",error:"error message" });

    db.query("SELECT * FROM about_whychoose WHERE id=1", (e2, wc) => {
      if (e2) return res.status(500).json({ message: "DB error2",error:"error message" });

      db.query(
        "SELECT * FROM about_whychoose_items ORDER BY sort_order",
        (e3, items) => {
          if (e3) return res.status(500).json({ message: "DB error3",error:"error message" });

          db.query(
            "SELECT * FROM about_whychoose_points ORDER BY sort_order",
            (e4, points) => {
              if (e4){
                console.error("ABOUT MAIN ERROR:", e4);
                return res.status(500).json({ message: "DB error4",error:"error message" });}


              const mappedItems = items.map(item => ({
                ...item,
                points: points
                  .filter(p => p.item_id === item.id)
                  .map(p => p.point)
              }));

              res.json({
                main: main[0],
                whyChoose: {
                  ...wc[0],
                  items: mappedItems
                }
              });
            }
          );
        }
      );
    });
  });
};

/*----------updateAboutMain----------*/
exports.updateAboutMain = (req, res) => {
  const { title, description1, description2 } = req.body;

  let imagePath = null;
  // If multer successfully saved the file, it will be in req.file
  if (req.file) {
    imagePath = `/uploads/about/${req.file.filename}`;
  }

  // Use COALESCE so if no new image is uploaded, the old one stays
  const sql = `
    UPDATE about_main 
    SET title=?, description1=?, description2=?, image=COALESCE(?, image) 
    WHERE id=1
  `;

  db.query(sql, [title, description1, description2, imagePath], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Updated successfully", path: imagePath });
  });
};


/*----------updateWhyChoose----------*/
exports.updateWhyChoose = (req, res) => {
  const { heading, subtitle, description, items } = req.body;

  db.query(
    "UPDATE about_whychoose SET heading=?, subtitle=?, description=? WHERE id=1",
    [heading, subtitle, description],
    (err) => {
      if (err) return res.status(500).json({ message: "Failed to update text" });

      db.query("DELETE FROM about_whychoose_items", () => {
        db.query("DELETE FROM about_whychoose_points", () => {
          
          if (!items || items.length === 0) return res.json({ message: "Updated successfully" });

          // Using a simple loop for items
          items.forEach((item, i) => {
            db.query(
              "INSERT INTO about_whychoose_items (whychoose_id, title, sort_order) VALUES (1, ?, ?)",
              [item.title, i + 1],
              (itemErr, result) => {
                if (itemErr) return;

                const newItemId = result.insertId;
                if (item.points && item.points.length > 0) {
                  // Construct values for bulk insert
                  const pointValues = item.points.map((p, j) => [newItemId, p, j + 1]);
                  db.query(
                    "INSERT INTO about_whychoose_points (item_id, point, sort_order) VALUES ?",
                    [pointValues]
                  );
                }
              }
            );
          });
          res.json({ message: "Why Choose section updated successfully" });
        });
      });
    }
  );
};
