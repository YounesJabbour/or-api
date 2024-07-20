var express = require("express");
var router = express.Router();
const siteController = require("../controller/siteController");

router.get("/", siteController.listSite);
router.get("/:id", siteController.getSite);
router.post("/create", siteController.createSite);
router.delete("/:id", siteController.deleteSite);

module.exports = router;
