const winston = require("winston");

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console());

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:MM:SS",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level}]:${log.message}`,
    ),
  ),
  transports: allowedTransports,
});

module.exports = logger;
