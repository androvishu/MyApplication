const express = require("express");
const config = require("config");

const controller = require("../controller/controller")
const route = express.Router();

route
    .get("/", (req, res) => res.send({ message: "API is start on port: " + config.get("server.port") }))


//__API__________
route
    .get('/api/weather', controller.weather)
module.exports = route;