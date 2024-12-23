const router = require("express").Router();
const authRoutes = require("./authRoutes");
const taxiRoutes = require("./taxiRoutes");

router.use("/auth", authRoutes);
router.use("/taxi", taxiRoutes);

module.exports = router;
