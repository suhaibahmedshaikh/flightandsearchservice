const express = require("express");

const router = express.Router();

const cityRoutes = require("./city-routes");

router.use("/city", cityRoutes);

module.exports = router;
