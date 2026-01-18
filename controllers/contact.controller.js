// controllers/contact.controller.js

const db = require("../db");

exports.getContact = (req, res) => {
  db.query("SELECT * FROM contact_us LIMIT 1", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

exports.updateContact = (req, res) => {
  const {
    phone,
    email,
    address,
    facebook,
    linkedin,
    instagram,
    google,
    youtube,
    map_url, // Make sure this matches the key sent from React payload
  } = req.body;

  const sql = `
    UPDATE contact_us SET
      phone = ?,
      email = ?,
      address = ?,
      facebook = ?,
      linkedin = ?,
      instagram = ?,
      google = ?,
      youtube = ?,
      map_url = ?
    WHERE id = 1
  `;

  db.query(
    sql,
    [phone, email, address, facebook, linkedin, instagram, google, youtube, map_url],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Update failed" });
      }
      res.json({ message: "Contact details updated successfully" });
    }
  );
};
