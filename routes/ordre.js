var express = require("express");
var router = express.Router();
const ordreController = require("../controller/OrController");

router.get("/", ordreController.listOrdreReparation);
router.get("/:id", ordreController.getOrdreReparation);
router.post("/create", ordreController.createOrdreReparation);

module.exports = router;
