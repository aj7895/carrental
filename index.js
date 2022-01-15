const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const Connection = require("./connection/database.js");
app.use(express.json());

// routes

app.use("/api/cars/", require("./routes/carsRoute.js"));
app.use("/api/users/", require("./routes/userRoute.js"));
app.use("/api/bookings/", require("./routes/bookingsRoute.js"));

// for deployment

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
