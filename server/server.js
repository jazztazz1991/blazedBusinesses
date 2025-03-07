const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const cors = require("cors");
const routes = require("./routes");

const db = require("./config/db");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors()); // This allows all origins during development

app.use(express.json()); //sets all data given from the front end in the form of a JSON file.
app.use(express.urlencoded({ extended: true }));
app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
}

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port: http://localhost:${PORT}!`);
    });
});
