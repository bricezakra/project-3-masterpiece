const router = require("express").Router();
const bookRoutes = require("./books");
const mapboxRoutes = require("./mapboxAPI")


// Book routes
router.use("/books", bookRoutes);
router.use("/mapbox", mapboxRoutes);

module.exports = router;