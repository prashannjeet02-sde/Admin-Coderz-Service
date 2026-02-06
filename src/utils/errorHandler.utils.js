const BaseError = require("../errors/baseError");

function handleError(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      name: err.name,
      message: err.message,
      data: {},
    });
  } else {
    return res.status(err.statusCode).json({
      success: false,
      name: "Internal Server Error",
      message: "Something went Wrong",
      data: {},
    });
  }
}

module.exports = handleError;
