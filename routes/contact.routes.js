const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact.controller");

router.get("/", contact.getContact);
router.put("/", contact.updateContact);

module.exports = router;
