const express = require("express");
const path = require("path");
const router = express.Router();

// API: Get tech stack
router.get("/techstack", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/techstack.html"));
});

// API: Get architecture image
router.get("/architecture", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/architecture.png"));
});

module.exports = router;
