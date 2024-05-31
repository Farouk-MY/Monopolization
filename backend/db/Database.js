const mongoose = require("mongoose");

const connectDatabase = () => {
  
  console.log("DB_URL:", process.env.DB_URL); // Add this line to check the value of DB_URL
  mongoose
    .connect(process.env.DB_URL, {
    })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

module.exports = connectDatabase;
