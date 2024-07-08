var express = require("express");
var router = express.Router();
const vehiculeController = require("../controller/vehiculeController");

router.get("/", vehiculeController.listVehicule);
router.get("/:id", vehiculeController.getVehicule);
router.post("/create", vehiculeController.createVehicule);

module.exports = router;
