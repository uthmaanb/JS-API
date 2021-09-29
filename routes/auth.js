const express = require("express");

// use this name when defining routes now, no longer app
const router = express.Router();

// @route   GET api/auth
// @desc    get logged in user
// @access  Private
router.get("/", (req, res) => {
  res.send("get logged in user");
});

// @route   POST api/auth
// @desc    get logged in user
// @access  Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
