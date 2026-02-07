const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Routes
const apiRoute = require("./routes/index");
app.use("/api", apiRoute);

// Last middleware to handle error
const errorHandler = require("./utils/errorHandler.utils");
app.use(errorHandler);

// Server and Database
const DB = require("./config/db.config");

app.listen(PORT, async () => {
  console.log(`Server listening to PORT:${PORT}`);
  await DB();
  console.log("DB Connection Successful");
});
