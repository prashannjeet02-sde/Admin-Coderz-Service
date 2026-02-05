const testing = (req, res) => {
  return res.status(200).json({ success: true, message: "Test Successful" });
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
