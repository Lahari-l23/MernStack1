const mongoose = require("mongoose");

const mongo_url = "mongodb://127.0.0.1:27017/flight_db?directConnection=true&serverSelectionTimeoutMS=2000";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to database");
  } catch (error) {
    console.log("Cannot connect to database", error);
    process.exit();
  }
};

module.exports = connectToMongo;
