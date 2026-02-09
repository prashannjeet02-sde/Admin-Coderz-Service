const { ProblemService } = require("../services/index");
const { ProblemRepo } = require("../repositories/index");

const problemService = new ProblemService(new ProblemRepo());

const testing = (req, res, next) => {
  try {
    throw new NotFound("Email");
  } catch (error) {
    next(error);
  }
};

const addProblem = async (req, res, next) => {
  try {
    const problem = await problemService.createProblem(req.body);
    return res
      .status(200)
      .json({ success: true, message: "New Problem Created", data: problem });
  } catch (error) {
    next(error);
  }
};

const getProblem = (req, res) => {};

const getProblems = (req, res) => {};

const updateProblem = (req, res) => {};

const deleteProblem = (req, res) => {};

module.exports = {
  testing,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
