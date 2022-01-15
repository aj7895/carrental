const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingSchema.js");
const Car = require("../models/carSchema.js");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KHk9bFVu2B1vv22IdFEnxUuL3PGXHVN21IUhuhkoVgfZZziomEk2GG2ODJDgnFMdh5ctTrkZoOe5b5lpicaFrHh004DG8TyZa"
);

router.post("/bookcar", async (req, res) => {
  req.body.transactionId = "1234";
  // destructing token object
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      req.body.transactionId = payment.source.id;
      const newBooking = new Booking(req.body);
      await newBooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);
      await car.save();
      res.send("your booking is suceesfull");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// route to get all bookings

router.get("/getallbookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car");
    res.send(bookings);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
