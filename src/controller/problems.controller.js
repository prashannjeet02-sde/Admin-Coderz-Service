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
      .status(201)
      .json({ success: true, message: "New Problem Created", data: problem });
  } catch (error) {
    next(error);
  }
};

const getProblem = async (req, res, next) => {
  try {
    const problem = await problemService.fetchProblem(req.params.id);
    return res
      .status(201)
      .json({ success: true, message: "Data list fetched", data: problem });
  } catch (error) {
    next(error);
  }
};

const getProblems = async (req, res, next) => {
  try {
    const fetch = await problemService.fetchProblems();
    return res
      .status(200)
      .json({ success: true, message: "List of all Problem", data: fetch });
  } catch (error) {
    next(error);
  }
};

const updateProblem = (req, res) => {};

const deleteProblem = async (req, res, next) => {
  try {
    const del = await problemService.removeProblem(req.params.id);
    return res.status(200).json({
      success: true,
      message: `Problem with id:${req.params.id} deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  testing,
  addProblem,
  getProblem,
  getProblems,
  updateProblem,
  deleteProblem,
};
