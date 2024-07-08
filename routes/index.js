const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "Welcome to the OR-authall fake API built with Node.js and Express.js"
  );
});

module.exports = router;
