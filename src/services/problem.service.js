const { SanitizeMarkdown } = require("../utils/index");
const { NotFoundError, BadRequestError } = require("../errors/index");

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

  async removeProblem(id) {
    const del = await this.repository.deleteProblem(id);
    if (!del) {
      throw new NotFoundError("Problem");
    }
    return del;
  }

  async updateProblem(id, body) {
    try {
      const modify = await this.repository.updateProblem(id, body);
      return modify;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
