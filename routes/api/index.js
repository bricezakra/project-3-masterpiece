const router = require("express").Router();
const mapboxRoutes = require("./mapboxAPI")



router.use("/mapbox", mapboxRoutes);

module.exports = router;