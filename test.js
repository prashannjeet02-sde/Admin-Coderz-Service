class BaseError extends Error {
  constructor(name, statusCode, description) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
  }
}

class NotFound extends BaseError {
  constructor(resource) {
    super("Not Found", 404, `${resource} not found`);
  }
}

const page = new NotFound("Email");
console.log(page);
