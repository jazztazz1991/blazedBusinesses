const router = require("express").Router();
const { logout, login, createUser } = require("../../controllers/userController");
const { clearToken } = require("../../utils/authMiddleware");

router.route("/").post(createUser);
// POST /api/logout
router.post("/logout", clearToken, logout);

// POST /api/login
router.post("/login", login);

module.exports = router;
