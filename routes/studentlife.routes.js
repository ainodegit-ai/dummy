const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentlife.controller");
const upload = require("../middlewares/upload.studentlife");
const auth = require("../middlewares/auth.middleware");

router.get("/", controller.getStudentLife);

// Main section with single image
router.put("/main", auth, upload.single("image"), controller.updateStudentLifeMain);

// Activities section with multiple potential icons
router.put("/activities", auth, upload.any(), controller.updateStudentLifeActivities);

module.exports = router;