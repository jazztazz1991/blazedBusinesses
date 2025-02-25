const { Taxi } = require("../models");
const { User } = require("../models");

module.exports = {
    // login
    async addSession(req, res) {
        const { start, end, day, time, driver } = req.body;
        console.log("add session hit");
        console.log(req.body);
        try {
            // const username = await User.findOne({ _id: userId });
            // console.log(username.username);
            const newSession = await Taxi.create({
                start,
                end,
                day,
                time,
                driver
                // userId,
                // username: username.username
            });
            res.status(201).json(newSession);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    },
};