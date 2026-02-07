const mongoose = require("mongoose");
const { DB_URL, NODE_ENV } = require("./server.config");

async function ConnectDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(DB_URL);
    }
  } catch (error) {
    console.log("Failed to make DB Connection");
    console.log(error);
  }
}

module.exports = ConnectDB;
