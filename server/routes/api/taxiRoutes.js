const router = require("express").Router();
const { addSession } = require("../../controllers/taxiController");

// POST /api/logout
router.post("/addSession", addSession);


module.exports = router;