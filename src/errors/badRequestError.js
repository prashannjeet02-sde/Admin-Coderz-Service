const BaseError = require("./baseError");

class BadRequest extends BaseError {
  constructor(data) {
    super("Bad Request", 400, `${data} is required.Cannot be empty`);
  }
}

module.exports = BadRequest;
