const problemRoutes = require("./problems.routes");

const express = require("express");
const v1Router = express.Router();

v1Router.use("/problems", problemRoutes);

module.exports = v1Router;
