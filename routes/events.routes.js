// routes/events.routes.js

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.events");
const events = require("../controllers/events.controller");

router.get("/", events.getEventsPage);

router.put("/intro", upload.single("image"), events.updateEventsIntro);

router.post("/gallery", upload.single("image"), events.addGalleryItem);
router.put("/gallery/:id", upload.single("image"), events.updateGalleryItem);
router.delete("/gallery/:id", events.deleteGalleryItem);

module.exports = router;
