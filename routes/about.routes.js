// routes/about.routes.js
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");

// MAKE SURE THIS POINTS TO THE FILE CREATED IN STEP 1
const uploadAbout = require("../middlewares/upload.about"); 

const { getAboutPage, updateAboutMain, updateWhyChoose } = require("../controllers/about.controller");

router.get("/", getAboutPage);

// The string "image" here MUST match formData.append("image", ...) on frontend
router.put(
  "/main",
  auth,
  uploadAbout.single("image"), 
  updateAboutMain
);

router.put("/whychoose", auth, updateWhyChoose);

module.exports = router;