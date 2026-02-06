const BaseError = require("./baseError");

class NotImplemented extends BaseError {
  constructor(functionality) {
    super("Not-Implemented", 501, `${functionality}`);
  }
}

module.exports = NotImplemented;
