const { ProblemController } = require("../../controller/index");

const express = require("express");
const problemRoutes = express.Router();

problemRoutes.get("/check", ProblemController.testing);
/** ------------------------------------------------------------- */
problemRoutes.get("/:id", ProblemController.getProblem);

problemRoutes.get("/", ProblemController.getProblems);

problemRoutes.post("/", ProblemController.addProblem);

problemRoutes.put("/:id", ProblemController.updateProblem);

problemRoutes.delete("/:id", ProblemController.deleteProblem);

module.exports = problemRoutes;
