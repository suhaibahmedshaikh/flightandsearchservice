const express = require("express");

const router = express.Router();

const CityController = require("../../controllers/city-controller");

router.post("/", CityController.create);
router.get("/:id", CityController.get);
router.get("/", CityController.getAll);
router.delete("/:id", CityController.destroy);
router.patch("/:id", CityController.update);

module.exports = router;
