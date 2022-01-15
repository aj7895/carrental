const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect(
    `mongodb+srv://amit2508:aj1554@easycars.ro4qn.mongodb.net/easycars?retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useNewUrlParser: true }
  );
  const connection = mongoose.connection;
  connection.on("connected", () => console.log("Connection established"));
  connection.on("error", () => console.log("Connection error"));
};

connectToDatabase();
module.exports = mongoose;
