const db = require("../db");

/*---------- getStudentLife ----------*/
exports.getStudentLife = (req, res) => {
  // Query 1: Main Section
  db.query("SELECT * FROM student_life_main WHERE id = 1", (err, main) => {
    if (err) return res.status(500).json(err);

    // Query 2: Activities Header Section
    db.query("SELECT * FROM student_life_activities_section WHERE id = 1", (err2, actSection) => {
      if (err2) return res.status(500).json(err2);

      // Query 3: Activity Items
      db.query("SELECT * FROM student_life_activities ORDER BY sort_order ASC", (err3, activities) => {
        if (err3) return res.status(500).json(err3);

        res.json({
          main: main[0],
          activitySection: actSection[0], // New fields here
          activities: activities || []
        });
      });
    });
  });
};

/*---------- updateStudentLifeActivities ----------*/

exports.updateStudentLifeActivities = (req, res) => {
  const { heading, description, items } = req.body; // New fields heading/description
  const parsedItems = typeof items === 'string' ? JSON.parse(items) : items;

  // 1. Update the Header first
  db.query(
    "UPDATE student_life_activities_section SET heading = ?, description = ? WHERE id = 1",
    [heading, description],
    (err) => {
      if (err) return res.status(500).json({ message: "Header update failed" });

      // 2. Map files
      const iconMap = {};
      if (req.files) {
        req.files.forEach(file => {
          const match = file.fieldname.match(/items\[(\d+)\]/);
          if (match) iconMap[match[1]] = `/uploads/studentlife/${file.filename}`;
        });
      }

      // 3. Wipe and Replace Items
      db.query("DELETE FROM student_life_activities", (delErr) => {
        if (delErr) return res.status(500).json({ message: "Delete failed" });

        const values = parsedItems.map((item, i) => [
          item.title,
          item.description,
          iconMap[i] || item.icon || "",
          i + 1
        ]);

        if (values.length === 0) return res.json({ message: "Updated (headings only)" });

        db.query(
          "INSERT INTO student_life_activities (title, description, icon, sort_order) VALUES ?",
          [values],
          () => res.json({ message: "Activities and Header updated successfully" })
        );
      });
    }
  );
};

exports.updateStudentLifeMain = (req, res) => {
    const { heading, sub_heading, content_title, description } = req.body;
    let imagePath = req.file ? `/uploads/studentlife/${req.file.filename}` : null;

    // Fixed SQL to include content_title
    const sql = `
        UPDATE student_life_main SET 
        heading=?, sub_heading=?, content_title=?, description=?, 
        image=COALESCE(?, image) WHERE id=1`;

    db.query(sql, [heading, sub_heading, content_title, description, imagePath], (err) => {
        if (err) return res.status(500).json({ message: "Update failed" });
        res.json({ message: "Student Life Main updated" });
    });
};

// exports.updateStudentLifeActivities = (req, res) => {
//     const { items } = req.body; // Expecting JSON array
//     const parsedItems = typeof items === 'string' ? JSON.parse(items) : items;

//     const iconMap = {};
//     if (req.files) {
//         req.files.forEach(file => {
//             const match = file.fieldname.match(/items\[(\d+)\]/);
//             if (match) iconMap[match[1]] = `/uploads/studentlife/${file.filename}`;
//         });
//     }

//     db.query("DELETE FROM student_life_activities", (err) => {
//         if (err) return res.status(500).json({ message: "Delete failed" });

//         const values = parsedItems.map((item, i) => [
//             item.title,
//             item.description,
//             iconMap[i] || item.icon || "",
//             i + 1
//         ]);

//         if (values.length === 0) return res.json({ message: "Activities cleared" });

//         db.query(
//             "INSERT INTO student_life_activities (title, description, icon, sort_order) VALUES ?",
//             [values],
//             () => res.json({ message: "Activities updated successfully" })
//         );
//     });
// };