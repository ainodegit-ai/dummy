// routes/home.routes.js

const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");

const {
  getHomeAbout,
  updateHomeAbout,
} = require("../controllers/home.controller");

// PUBLIC
router.get("/about", getHomeAbout);

// ADMIN (JWT PROTECTED)
router.put(
  "/about",
  auth,
  upload.single("image"),
  updateHomeAbout
);

const {
  getHomeHero,
  updateHomeHero,
} = require("../controllers/home.controller");

// PUBLIC
router.get("/hero", getHomeHero);

// ADMIN
router.put("/hero", auth, updateHomeHero);

const uploadActivity = require("../middlewares/upload.activity");

const {
  getHomeActivity,
  updateHomeActivity
} = require("../controllers/home.controller");

// PUBLIC
router.get("/activity", getHomeActivity);

// ADMIN
// router.put(
//   "/activity",
//   auth,
//   uploadActivity.none(), // icons handled separately from admin UI
//   updateHomeActivity
// );
router.put(
  "/activity",
  auth,
 uploadActivity.any(),
  updateHomeActivity
);


const {
  getHomeFaq,
  updateHomeFaq
} = require("../controllers/home.controller");

// PUBLIC
router.get("/faq", getHomeFaq);

// ADMIN
router.put("/faq", auth, updateHomeFaq);

const uploadTestimonial = require("../middlewares/upload.testimonial");

const {
  getHomeTestimonials,
  updateHomeTestimonials
} = require("../controllers/home.controller");

// PUBLIC
router.get("/testimonials", getHomeTestimonials);

// ADMIN
router.put(
  "/testimonials",
  auth,
  uploadTestimonial.any(),
  updateHomeTestimonials
);

// const {
//   getHomeStandOut,
//   updateHomeStandOut
// } = require("../controllers/home.controller");

// // PUBLIC
// router.get("/standout", getHomeStandOut);

// // ADMIN
// router.put("/standout", auth, updateHomeStandOut);

const uploadStandOut = require("../middlewares/upload.standout");
const {
  getHomeStandOut,
  updateHomeStandOut,
} = require("../controllers/home.controller");

// PUBLIC
router.get("/standout", getHomeStandOut);

// ADMIN
router.put(
  "/standout",
  auth,
  uploadStandOut.any(), // 👈 IMPORTANT
  updateHomeStandOut
);


const uploadWelcome = require("../middlewares/upload.welcome");

const {
  getHomeWelcome,
  updateHomeWelcome
} = require("../controllers/home.controller");

// PUBLIC
router.get("/welcome", getHomeWelcome);

// ADMIN
router.put(
  "/welcome",
  auth,
  uploadWelcome.single("image"),
  updateHomeWelcome
);

const {
  getHomeCTA,
  updateHomeCTA
} = require("../controllers/home.controller");

// PUBLIC
router.get("/cta", getHomeCTA);

// ADMIN
router.put("/cta", auth, updateHomeCTA);

const uploadBanner = require("../middlewares/upload.banner");

const {
  getHomeBanners,
  addHomeBanner,
  deleteHomeBanner
} = require("../controllers/home.controller");

// PUBLIC
router.get("/banners", getHomeBanners);

// ADMIN
router.post(
  "/banners",
  auth,
  uploadBanner.single("image"),
  addHomeBanner
);

router.delete(
  "/banners/:id",
  auth,
  deleteHomeBanner
);

const { getHomeAdmission,updateHomeAdmission} = require("../controllers/home.controller");
// PUBLIC
router.get("/admission", getHomeAdmission);

// ADMIN
router.put("/admission", auth, updateHomeAdmission);

module.exports = router;
