// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/academics.controller");
// const upload = require("../middlewares/uploadAcademics");

// router.get("/", controller.getAcademics);
// router.put("/section", controller.updateSection);
// router.post("/program", upload.single("image"), controller.addProgram);
// router.put("/program/:id", upload.single("image"), controller.updateProgram);
// router.delete("/program/:id", controller.deleteProgram);

// module.exports = router;


// routes/academics.routes.js

const express = require("express");
const router = express.Router();
const multer = require("multer");
const academicsController = require("../controllers/academics.controller");
const db = require("../db");
const auth = require("../middlewares/auth.middleware");
const verifyAdmin = auth;


// IMAGE UPLOAD
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/academics");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* ================= ACADEMICS LISTING ================= */

router.get("/", academicsController.getAcademics);

router.put(
  "/section",
  verifyAdmin,
  academicsController.updateAcademicsSection
);

router.post(
  "/program",
  verifyAdmin,
  upload.single("image"),
  academicsController.addProgram
);

router.put(
  "/program/:id",
  verifyAdmin,
  upload.single("image"),
  academicsController.updateProgram
);

router.delete(
  "/program/:id",
  verifyAdmin,
  academicsController.deleteProgram
);

/* ================= ACADEMICS DETAILS ================= */

router.get(
  "/:programId/details",
  academicsController.getAcademicDetails
);

router.put(
  "/:programId/details",
  verifyAdmin,
  upload.single("image"),
  academicsController.updateAcademicDetails
);

router.put(
  "/:programId/foundation",
  verifyAdmin,
  academicsController.updateFoundation
);

router.put(
  "/:programId/cta",
  verifyAdmin,
  academicsController.updateAdmissionCTA
);

router.put(
  "/:programId/faq",
  verifyAdmin,
  academicsController.updateFAQ
);

module.exports = router;
