const express = require("express");
const router = express.Router();

// About page
router.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Contact page
router.get("/contact", (req, res) => {
  res.send("This is the contact page.");
});

// Docs page
router.use("/docs", express.static(path.join(__dirname, "../public")));

module.exports = router;
