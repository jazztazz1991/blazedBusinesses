const mongoose = require("mongoose");
const { Schema } = mongoose;

const taxiSchema = new Schema(
    {
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true,
        },
        time: {
            type: Number,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// set up pre-save middleware to create password

module.exports = mongoose.model("Taxi", taxiSchema);
