const BaseError = require("./baseError");

class NotFound extends BaseError {
  constructor(resource) {
    super("Not Found", 404, `${resource} not present`);
  }
}

module.exports = NotFound;
