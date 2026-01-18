// controllers/home.controller.js

const db = require("../db");

/* ================= GET ABOUT (PUBLIC) ================= */
exports.getHomeAbout = (req, res) => {
  db.query("SELECT * FROM home_about LIMIT 1", (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json(result[0]);
  });
};

/* ================= UPDATE ABOUT (ADMIN) ================= */
exports.updateHomeAbout = (req, res) => {
  const { title, description1, description2 } = req.body;

  let imagePath = null;
  if (req.file) {
    imagePath = `/uploads/home/about/${req.file.filename}`;
  }

  const sql = `
    UPDATE home_about 
    SET 
      title = ?, 
      description1 = ?, 
      description2 = ?, 
      image = COALESCE(?, image)
    WHERE id = 1
  `;

  db.query(
    sql,
    [title, description1, description2, imagePath],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Update failed" });
      }
      res.json({ message: "About section updated successfully" });
    }
  );
};



/* ================= GET HERO (PUBLIC) ================= */
exports.getHomeHero = (req, res) => {
  db.query("SELECT * FROM home_hero WHERE id = 1", (err, heroResult) => {
    if (err) return res.status(500).json({ message: "DB error" });

    db.query(
      "SELECT title, description FROM home_hero_cards WHERE hero_id = 1 ORDER BY sort_order",
      (err, cardsResult) => {
        if (err) return res.status(500).json({ message: "DB error" });

        res.json({
          ...heroResult[0],
          cards: cardsResult,
        });
      }
    );
  });
};


/* ================= UPDATE HERO (ADMIN) ================= */
exports.updateHomeHero = (req, res) => {
  const { heading, sub_heading, description, cards } = req.body;

  const heroSql = `
    UPDATE home_hero 
    SET heading = ?, sub_heading = ?, description = ?
    WHERE id = 1
  `;

  db.query(heroSql, [heading, sub_heading, description], (err) => {
    if (err) {
      return res.status(500).json({ message: "Hero update failed" });
    }

    // Delete old cards
    db.query("DELETE FROM home_hero_cards WHERE hero_id = 1", () => {

      const parsedCards =
        typeof cards === "string" ? JSON.parse(cards) : cards;

      if (!parsedCards || !parsedCards.length) {
        return res.json({ message: "Hero updated (no cards)" });
      }

      const values = parsedCards.map((c, i) => [
        1,
        c.title,
        c.description,
        i + 1,
      ]);

      const cardSql = `
        INSERT INTO home_hero_cards
        (hero_id, title, description, sort_order)
        VALUES ?
      `;

      db.query(cardSql, [values], () => {
        res.json({ message: "Hero section updated successfully" });
      });
    });
  });
};

//================= GET ACTIVITY (PUBLIC) ================= */
exports.getHomeActivity = (req, res) => {
  db.query(
    "SELECT * FROM home_activity WHERE id = 1",
    (err, activityResult) => {
      if (err) return res.status(500).json({ message: "DB error" });

      db.query(
        "SELECT title, description, icon FROM home_activity_items WHERE activity_id = 1 ORDER BY sort_order",
        (err, itemsResult) => {
          if (err) return res.status(500).json({ message: "DB error" });

          res.json({
            ...activityResult[0],
            items: itemsResult
          });
        }
      );
    }
  );
};

/* ================= UPDATE ACTIVITY (ADMIN) ================= */
exports.updateHomeActivity = (req, res) => {
  const { heading, description, items: bodyItems } = req.body;

  // 1. Update Headings
  db.query(
    "UPDATE home_activity SET heading = ?, description = ? WHERE id = 1",
    [heading, description],
    (err) => {
      if (err) return res.status(500).json({ message: "Header update failed" });

      // 2. Map Files
      const iconMap = {};
      if (req.files) {
        req.files.forEach((file) => {
          // Finds index '0' from 'items[0][icon]'
          const match = file.fieldname.match(/items\[(\d+)\]/);
          if (match) {
            iconMap[match[1]] = `/uploads/home/activity/${file.filename}`;
          }
        });
      }

      // 3. Build values array for INSERT
      const itemsToInsert = [];
      if (bodyItems) {
        Object.keys(bodyItems).forEach((index) => {
          const item = bodyItems[index];
          // Use new uploaded path if available, otherwise keep the old one
          const finalIcon = iconMap[index] || item.icon || "";

          itemsToInsert.push([
            1, // activity_id
            item.title || "",
            item.description || "",
            finalIcon,
            parseInt(index) + 1, // sort_order
          ]);
        });
      }

      // 4. Wipe old items and insert new ones
      db.query("DELETE FROM home_activity_items WHERE activity_id = 1", (delErr) => {
        if (delErr) return res.status(500).json({ message: "Delete failed" });

        if (itemsToInsert.length === 0) {
          return res.json({ message: "Activity updated (headings only)" });
        }

        db.query(
          "INSERT INTO home_activity_items (activity_id, title, description, icon, sort_order) VALUES ?",
          [itemsToInsert],
          (insErr) => {
            if (insErr) return res.status(500).json({ message: "Insert failed" });
            res.json({ message: "Activity updated successfully" });
          }
        );
      });
    }
  );
};



//================= GET FAQ (PUBLIC) ================= */
exports.getHomeFaq = (req, res) => {
  db.query(
    "SELECT * FROM home_faq WHERE id = 1",
    (err, faqResult) => {
      if (err) return res.status(500).json({ message: "DB error" });

      db.query(
        "SELECT question, answer FROM home_faq_items WHERE faq_id = 1 ORDER BY sort_order",
        (err, itemsResult) => {
          if (err) return res.status(500).json({ message: "DB error" });

          res.json({
            ...faqResult[0],
            items: itemsResult
          });
        }
      );
    }
  );
};
/* ================= UPDATE FAQ (ADMIN) ================= */
exports.updateHomeFaq = (req, res) => {
  const { heading, description, items } = req.body;

  const updateSql = `
    UPDATE home_faq
    SET heading = ?, description = ?
    WHERE id = 1
  `;

  db.query(updateSql, [heading, description], (err) => {
    if (err) {
      return res.status(500).json({ message: "FAQ update failed" });
    }

    db.query("DELETE FROM home_faq_items WHERE faq_id = 1", () => {
      const parsedItems =
        typeof items === "string" ? JSON.parse(items) : items;

      if (!parsedItems || !parsedItems.length) {
        return res.json({ message: "FAQ updated (no items)" });
      }

      const values = parsedItems.map((item, i) => [
        1,
        item.question,
        item.answer,
        i + 1
      ]);

      const insertSql = `
        INSERT INTO home_faq_items
        (faq_id, question, answer, sort_order)
        VALUES ?
      `;

      db.query(insertSql, [values], () => {
        res.json({ message: "FAQ section updated successfully" });
      });
    });
  });
};

//================= GET TESTIMONIALS (PUBLIC) ================= */
exports.getHomeTestimonials = (req, res) => {
  db.query(
    "SELECT * FROM home_testimonial WHERE id = 1",
    (err, parentResult) => {
      if (err) return res.status(500).json({ message: "DB error" });

      db.query(
        `SELECT name, role, rating, text, image 
         FROM home_testimonial_items 
         WHERE testimonial_id = 1 
         ORDER BY sort_order`,
        (err, itemsResult) => {
          if (err) return res.status(500).json({ message: "DB error" });

          res.json({
            ...parentResult[0],
            items: itemsResult
          });
        }
      );
    }
  );
};

//================= UPDATE TESTIMONIALS (ADMIN) ================= */
exports.updateHomeTestimonials = (req, res) => {
  const { heading, description, items: bodyItems } = req.body;

  db.query(
    "UPDATE home_testimonial SET heading = ?, description = ? WHERE id = 1",
    [heading, description],
    (err) => {
      if (err) return res.status(500).json({ message: "Update failed" });

      const imageMap = {};
      if (req.files) {
        req.files.forEach((file) => {
          // Extracts index from items[0][image]
          const match = file.fieldname.match(/items\[(\d+)\]/);
          if (match) imageMap[match[1]] = `/uploads/home/testimonial/${file.filename}`;
        });
      }

      let items = [];
      if (bodyItems && typeof bodyItems === "object") {
        Object.keys(bodyItems).forEach((index) => {
          const item = bodyItems[index];
          items[index] = [
            1, // testimonial_id
            item.name || "",
            item.role || "",
            item.rating || 5,
            item.text || "",
            imageMap[index] || item.image || "", // Use new upload or existing path
            parseInt(index) + 1, // sort_order
          ];
        });
      }

      const finalValues = items.filter(Boolean);

      db.query("DELETE FROM home_testimonial_items WHERE testimonial_id = 1", (delErr) => {
        if (delErr) return res.status(500).json({ message: "Delete failed" });

        if (finalValues.length === 0) {
          return res.json({ message: "Heading updated, but no items to save." });
        }

        db.query(
          `INSERT INTO home_testimonial_items 
          (testimonial_id, name, role, rating, text, image, sort_order) 
          VALUES ?`,
          [finalValues],
          (insErr) => {
            if (insErr) return res.status(500).json({ message: "Insert failed" });
            res.json({ message: "Testimonials updated successfully" });
          }
        );
      });
    }
  );
};


//================= GET STANDOUT (PUBLIC) ================= */
exports.getHomeStandOut = (req, res) => {
  db.query(
    "SELECT * FROM home_standout WHERE id = 1",
    (err, parentResult) => {
      if (err) return res.status(500).json({ message: "DB error" });

      db.query(
        "SELECT title, icon FROM home_standout_items WHERE standout_id = 1 ORDER BY sort_order",
        (err, itemsResult) => {
          if (err) return res.status(500).json({ message: "DB error" });

          res.json({
            ...parentResult[0],
            items: itemsResult
          });
        }
      );
    }
  );
};

/* ================= UPDATE STANDOUT (ADMIN) ================= */
exports.updateHomeStandOut = (req, res) => {
  const { heading, items: bodyItems } = req.body;

  // 1. Update the heading first
  db.query("UPDATE home_standout SET heading = ? WHERE id = 1", [heading], (err) => {
    if (err) return res.status(500).json({ message: "DB Update failed" });

    // 2. Map uploaded files to their specific index
    const iconMap = {};
    if (req.files) {
      req.files.forEach((file) => {
        const match = file.fieldname.match(/items\[(\d+)\]/);
        if (match) {
          iconMap[match[1]] = `/uploads/home/standout/${file.filename}`;
        }
      });
    }

    // 3. Process items into an array for bulk insertion
    let finalValues = [];
    if (bodyItems) {
      Object.keys(bodyItems).forEach((index) => {
        const item = bodyItems[index];
        // Priority: 1. New File path, 2. Existing Path string
        const iconPath = iconMap[index] || item.icon || "";

        finalValues.push([
          1, // standout_id
          item.title || "",
          iconPath,
          parseInt(index) + 1 // sort_order
        ]);
      });
    }

    // 4. Delete old items and insert new ones
    db.query("DELETE FROM home_standout_items WHERE standout_id = 1", (delErr) => {
      if (delErr) return res.status(500).json({ message: "Delete failed" });

      if (finalValues.length === 0) {
        return res.json({ message: "Heading updated, but no items were sent." });
      }

      db.query(
        "INSERT INTO home_standout_items (standout_id, title, icon, sort_order) VALUES ?",
        [finalValues],
        (insErr) => {
          if (insErr) return res.status(500).json({ message: "Insert failed" });
          res.json({ message: "StandOut updated successfully" });
        }
      );
    });
  });
};



/* ================= GET WELCOME (PUBLIC) ================= */
exports.getHomeWelcome = (req, res) => {
  db.query("SELECT * FROM home_welcome WHERE id = 1", (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json(result[0]);
  });
};

/* ================= UPDATE WELCOME (ADMIN) ================= */
exports.updateHomeWelcome = (req, res) => {
  const { title, text1, text2, buttonText } = req.body;

  let imagePath = null;
  // req.file comes from uploadWelcome.single("image")
  if (req.file) {
    imagePath = `/uploads/home/welcome/${req.file.filename}`;
  }

  const sql = `
    UPDATE home_welcome
    SET
      title = ?,
      text1 = ?,
      text2 = ?,
      button_text = ?,
      image = COALESCE(?, image)
    WHERE id = 1
  `;

  db.query(
    sql,
    [title, text1, text2, buttonText, imagePath],
    (err) => {
      if (err) {
        console.error("Welcome DB Error:", err);
        return res.status(500).json({ message: "Welcome update failed" });
      }
      res.json({ message: "Welcome section updated successfully" });
    }
  );
};

/* ================= GET CTA (PUBLIC) ================= */
exports.getHomeCTA = (req, res) => {
  db.query("SELECT * FROM home_cta WHERE id = 1", (err, result) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json(result[0]);
  });
};

/* ================= UPDATE CTA (ADMIN) ================= */
exports.updateHomeCTA = (req, res) => {
  const { tag, title, description, buttonText } = req.body;

  const sql = `
    UPDATE home_cta
    SET
      tag = ?,
      title = ?,
      description = ?,
      button_text = ?
    WHERE id = 1
  `;

  db.query(
    sql,
    [tag, title, description, buttonText],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "CTA update failed" });
      }
      res.json({ message: "CTA section updated successfully" });
    }
  );
};

/* ================= GET BANNERS (PUBLIC) ================= */
exports.getHomeBanners = (req, res) => {
  db.query(
    "SELECT id, image FROM home_banners WHERE status = 1 ORDER BY sort_order",
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json(result);
    }
  );
};

/* ================= ADD BANNER (ADMIN) ================= */
exports.addHomeBanner = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Image required" });
  }

  const imagePath = `/uploads/home/banners/${req.file.filename}`;

  // Get next sort order
  const orderSql = "SELECT IFNULL(MAX(sort_order), 0) + 1 AS nextOrder FROM home_banners";

  db.query(orderSql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Order fetch failed" });
    }

    const nextOrder = result[0].nextOrder;

    const insertSql = `
      INSERT INTO home_banners (image, sort_order)
      VALUES (?, ?)
    `;

    db.query(insertSql, [imagePath, nextOrder], (err) => {
      if (err) {
        console.error("BANNER INSERT ERROR 👉", err);
        return res.status(500).json({ message: "Banner add failed" });
      }

      res.json({ message: "Banner added successfully" });
    });
  });
};



/* ================= DELETE BANNER (ADMIN) ================= */
exports.deleteHomeBanner = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM home_banners WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Delete failed" });
      }
      res.json({ message: "Banner deleted successfully" });
    }
  );
};

/* ================= GET ADMISSION (PUBLIC) ================= */
exports.getHomeAdmission = (req, res) => {
  db.query(
    "SELECT title, subtitle FROM home_admission WHERE id = 1",
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB error" });

      if (!result.length) {
        return res.json({ title: "", subtitle: "" });
      }

      res.json(result[0]);
    }
  );
};

/* ================= UPDATE ADMISSION (ADMIN) ================= */
exports.updateHomeAdmission = (req, res) => {
  const { title, subtitle } = req.body;

  const sql = `
    UPDATE home_admission
    SET title = ?, subtitle = ?
    WHERE id = 1
  `;

  db.query(sql, [title, subtitle], (err) => {
    if (err) return res.status(500).json({ message: "Update failed" });

    res.json({ message: "Admission section updated" });
  });
};
