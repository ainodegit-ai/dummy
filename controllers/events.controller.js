// controllers/events.controller.js

const db = require("../db");


exports.getEventsPage = (req, res) => {
  db.query("SELECT * FROM events_intro LIMIT 1", (err, intro) => {
    if (err) return res.status(500).json(err);

    db.query(
      "SELECT * FROM events_gallery ORDER BY sort_order ASC",
      (err2, gallery) => {
        if (err2) return res.status(500).json(err2);

        res.json({
          intro: intro[0],
          gallery
        });
      }
    );
  });
};

exports.updateEventsIntro = (req, res) => {
  // Destructure names as sent from Frontend
  const { heading, sub_heading, sub_heading1, description } = req.body;

  let imagePath = req.file ? `/uploads/events/${req.file.filename}` : null;

  const sql = `
    UPDATE events_intro SET
      heading = ?,
      sub_heading = ?,
      sub_heading1 = ?,
      description = ?,
      image = COALESCE(?, image)
    WHERE id = 1
  `;

  db.query(
    sql,
    [heading, sub_heading, sub_heading1, description, imagePath],
    (err) => {
      if (err) return res.status(500).json({ message: "Update failed", error: err });
      res.json({ message: "Events intro updated successfully" });
    }
  );
};


exports.addGalleryItem = (req, res) => {
  const { title } = req.body;
  const image = `/uploads/events/${req.file.filename}`;

  db.query(
    "INSERT INTO events_gallery (title, image) VALUES (?, ?)",
    [title, image],
    () => res.json({ message: "Gallery item added" })
  );
};


exports.updateGalleryItem = (req, res) => {
  const { title } = req.body;
  let imagePath = null;

  if (req.file) {
    imagePath = `/uploads/events/${req.file.filename}`;
  }

  db.query(
    `
    UPDATE events_gallery 
    SET title = ?, image = COALESCE(?, image)
    WHERE id = ?
    `,
    [title, imagePath, req.params.id],
    () => res.json({ message: "Gallery updated" })
  );
};


exports.deleteGalleryItem = (req, res) => {
  db.query(
    "DELETE FROM events_gallery WHERE id = ?",
    [req.params.id],
    () => res.json({ message: "Gallery item deleted" })
  );
};
