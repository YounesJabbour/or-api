var express = require("express");
var router = express.Router();
const clientController = require("../controller/clientController");

router.get("/", clientController.listClient);
router.get("/:id", clientController.getClient);
router.post("/create", clientController.createClient);

module.exports = router;
