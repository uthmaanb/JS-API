const express = require("express");

// use this name when defining routes now, no longer app
const router = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post("/", (req, res) => {
  res.send("Register user");
});

module.exports = router;
