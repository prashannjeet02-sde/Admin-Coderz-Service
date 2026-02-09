const { Problems } = require("../schema/index");

class ProblemRepository {
  //Add Problem
  async AddProblem(problemData) {
    try {
      const addProblems = await Problems.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
        editorial: problemData.editorial ? problemData.editorial : "",
      });
      return addProblems;
    } catch (error) {
      console.log("Add Problem Repository:", error);
    }
  }

  //   Get Problem
  async GetProblems() {
    try {
      const problems = await Problems.find({});
      return problems;
    } catch (error) {
      console.log("Get Problem Repository:", error);
    }
  }

  async GetProblem(id) {
    try {
      const problem = await Problems.findById(id);
      return problem;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProblem(id) {
    try {
      const remove = await Problems.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProblemRepository;
