const mongoose = require("mongoose");
const config = require("./config");

async function connectDatabase() {
  try {
    await mongoose.connect(config.mongoUri);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);

    process.exit(1);
  }
}

module.exports = connectDatabase;