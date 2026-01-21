const db = require("../db");

exports.getAdmissions = (req, res) => {
  const response = {};
  db.query("SELECT * FROM admissions_hero LIMIT 1", (e, hero) => {
    response.hero = hero[0];
    db.query("SELECT * FROM admissions_sections", (e, sections) => {
      response.sections = {};
      sections.forEach(s => response.sections[s.section_key] = s);
      db.query(
        `SELECT d.title, i.document_text FROM admissions_documents d
         LEFT JOIN admissions_documents_items i ON d.id = i.document_id
         ORDER BY i.sort_order`,
        (e, docs) => {
          response.documents = {
            title: docs[0]?.title || "",
            items: docs.map(d => d.document_text).filter(Boolean)
          };
          res.json(response);
        }
      );
    });
  });
};

exports.updateHero = (req, res) => {
  const { title } = req.body;
  db.query("UPDATE admissions_hero SET title=? WHERE id=1", [title], err => {
    if (err) return res.status(500).json({ message: "Update failed" });
    res.json({ message: "Hero updated" });
  });
};

exports.updateSection = (req, res) => {
  const { key } = req.params;
  const { title, description } = req.body;
  
  // Use new image if uploaded, otherwise keep the old one (COALESCE)
  let imagePath = req.file ? `/uploads/admissions/${req.file.filename}` : null;

  db.query(
    `UPDATE admissions_sections 
     SET title=?, description=?, image=COALESCE(?, image) 
     WHERE section_key=?`,
    [title, description, imagePath, key],
    err => {
      if (err) return res.status(500).json({ message: "Update failed" });
      res.json({ message: "Section updated" });
    }
  );
};

exports.updateDocuments = (req, res) => {
  const { title, documents } = req.body;
  db.query("UPDATE admissions_documents SET title=? WHERE id=1", [title], () => {
    db.query("DELETE FROM admissions_documents_items WHERE document_id=1", () => {
      if (!documents || documents.length === 0) return res.json({ message: "Docs updated" });
      const values = documents.map((d, i) => [1, d, i + 1]);
      db.query(
        "INSERT INTO admissions_documents_items (document_id, document_text, sort_order) VALUES ?",
        [values],
        () => res.json({ message: "Documents updated" })
      );
    });
  });
};



