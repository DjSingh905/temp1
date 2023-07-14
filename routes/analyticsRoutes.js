const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../contollers/analyticdController");

const router = express.Router();

router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
