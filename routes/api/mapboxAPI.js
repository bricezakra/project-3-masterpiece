const router = require("express").Router();
const mapboxController = require("../../controllers/mapboxController");

// Matches with "/api/books"
router.route("/")
    .get(mapboxController.findKey)

module.exports = router;