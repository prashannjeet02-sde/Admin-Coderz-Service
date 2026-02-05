const { ProblemController } = require("../../controller/index");

const express = require("express");
const problemRoutes = express.Router();

problemRoutes.get("/check", ProblemController.testing);

module.exports = problemRoutes;
