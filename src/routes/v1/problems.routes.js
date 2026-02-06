const { ProblemController } = require("../../controller/index");

const express = require("express");
const problemRoutes = express.Router();

problemRoutes.get("/check", ProblemController.testing);

problemRoutes.get("/", ProblemController.getProblem);

problemRoutes.get("/:id", ProblemController.getProblems);

problemRoutes.post("/", ProblemController.addProblem);

problemRoutes.put("/:id", ProblemController.updateProblem);

problemRoutes.delete("/:id", ProblemController.deleteProblem);

module.exports = problemRoutes;
