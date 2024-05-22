const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
    console.log("mongoDB connected");
  } catch (error) {
    console.log("mongoDb not connected");
  }
};

module.exports = { dbConnect };
