const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config"); // Ensure this path is correct

module.exports = {
    async createUser(req, res) {
        try {
            console.log(req.body)
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // login
    async login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await User.findOne({ username });

            if (!user) {
                console.log("User not found")
                return res.status(404).json({ message: "User not found" });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({ message: "Invalid password" });
            }

            const token = jwt.sign({ id: user._id }, config.jwtSecret, {
                expiresIn: config.jwtExpiration,
            });

            res.json({ token, userId: user._id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // logout
    async logout(req, res) {
        // No action required on server; client handles token removal
        res.json({ message: "Logout successful" });
    },
};