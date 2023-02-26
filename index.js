const express = require("express");
const path = require("path");
const config = require("config");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = config.get("server.port");
const HOST = config.get("server.host");

const app = express();

app
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({extended: true}))
    .use("/", require("./server/routes/router"))
    .listen(PORT, HOST, ()=> console.log("Server is running!"))