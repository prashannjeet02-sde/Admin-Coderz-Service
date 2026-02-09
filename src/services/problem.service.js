const { SanitizeMarkdown } = require("../utils/index");

class ProblemService {
  constructor(repository) {
    this.repository = repository;
  }

  async createProblem(problemData) {
    try {
      problemData.description = SanitizeMarkdown(problemData.description);
      const problem = await this.repository.AddProblem(problemData);

      return problem;
    } catch (error) {
      throw error;
    }
  }

  async fetchProblems() {
    try {
      const problems = await this.repository.GetProblems();
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async fetchProblem(id) {
    try {
      const problem = await this.repository.GetProblem(id);
      return problem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
