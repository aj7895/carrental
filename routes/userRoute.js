const express = require("express");
const router = express.Router();
const User = require("../models/userSchema.js");

// get all the users
router.get("/getallusers", async (request, response) => {
  try {
    const users = await User.find();
    response.send(users);
    console.log(users);
  } catch (error) {
    return response.status(400).json(error);
    console.log(error);
  }
});

// login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("user registered successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

// edit user

// edit car
router.post("/edituser", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body._id });
    user.username = req.body.username;
    user.type = req.body.type;
    await user.save();
    res.send("User updated successfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
