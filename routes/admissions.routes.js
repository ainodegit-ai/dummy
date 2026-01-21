
const express = require("express");
const router = express.Router();
const admissionsController = require("../controllers/admissions.controller");
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.admissions"); // Create this similarly to upload.about.js

router.get("/", admissionsController.getAdmissions);
router.put("/hero", auth, admissionsController.updateHero);

// Multer handled route
router.put("/section/:key", auth, upload.single("image"), admissionsController.updateSection);

router.put("/documents", auth, admissionsController.updateDocuments);

module.exports = router;
