const NotFound = require("../errors/not-foundError");

const testing = (req, res, next) => {
  try {
    throw new NotFound("Email");
  } catch (error) {
    next(error);
  }
};

const addProblem = (req, res) => {};

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
