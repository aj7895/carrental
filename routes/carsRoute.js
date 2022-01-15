const express = require("express");
const router = express.Router();
const carsData = require("../models/carSchema.js");

router.get("/getallcars", async (request, response) => {
  try {
    const cars = await carsData.find();
    response.send(cars);
  } catch (error) {
    return response.status(400).json(error);
  }
});

// Addind new car routes

router.post("/addcar", async (req, res) => {
  try {
    const newcar = new carsData(req.body);
    await newcar.save();
    res.send("Car added successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// edit car
router.post("/editcar", async (req, res) => {
  try {
    const car = await carsData.findOne({ _id: req.body._id });
    car.name = req.body.name;
    car.image = req.body.image;
    car.fuelType = req.body.fuelType;
    car.rentPerHour = req.body.rentPerHour;
    car.capacity = req.body.capacity;
    await car.save();
    res.send("Car updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// delete car
router.post("/deletecar", async (req, res) => {
  try {
    const car = await carsData.findOneAndDelete({ _id: req.body.carid });
    res.send("Car deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
