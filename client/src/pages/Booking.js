import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// stripe
import StripeCheckout from "react-stripe-checkout";
// antd
import { DatePicker, Checkbox, Modal } from "antd";
import { Link } from "react-router-dom";
import { getCars } from "../redux/actions/carsActions";
import moment from "moment";
// actions
import { bookCar } from "../redux/actions/bookingActions";
// components
import BookingCard from "../components/BookingCard";

// range picker
const { RangePicker } = DatePicker;

const Booking = ({ match }) => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const [car, setCar] = useState({});
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  // if driver
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getCars());
    if (cars.length > 0) {
      setCar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  // total hours when driver is
  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);
    if (driver) {
      setTotalAmount(totalAmount + totalHours * 25);
    }
  }, [driver, totalHours]);

  function onToken(token) {
    const requestObject = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };
    dispatch(bookCar(requestObject));
  }

  // selecting time slots
  function selectTimeSlots(values) {
    console.log(moment(values[0]).format("MMM DD yyyy HH:mm"));
    console.log(moment(values[1]).format("MMM DD yyyy HH:mm"));
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }

  return (
    <div className="flex flex-col my-14 gap-20 justify-center">
      <BookingCard car={car} />
      <div className="my-10 mx-auto justify-center items-center">
        <div className="flex flex-col gap-14">
          <div>
            <h3 className="text-lg fomt-medium">Select Time Slot</h3>
            <div className="h-[2px] bg-gray-100 rounded-full w-96" />
            {/* DATE PICKER */}
            <div className="flex flex-col gap-2 my-3">
              <button
                onClick={() => setShowModal(true)}
                className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded"
              >
                See Booked Slot
              </button>
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="MMM DD yyyy HH:mm"
                onChange={selectTimeSlots}
              />
            </div>
            <p>
              Total hours :<b>{totalHours}</b> hours
            </p>
            <p>
              Rent per hour : <b>{car.rentPerHour}</b> /-
            </p>
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setDriver(true);
                } else {
                  setDriver(false);
                }
              }}
            >
              Driver Required
            </Checkbox>
            <p>
              Total Amount : <b>{totalAmount}</b>
            </p>
            <StripeCheckout
              shippingAddress
              token={onToken}
              currency="inr"
              totalAmount={totalAmount * 100}
              stripeKey="pk_test_51KHk9bFVu2B1vv22AnbnAwkhgLmrBdzgo9pBtp3IwQN48jGpHhhwpMadXbGw93mlGEueBJn0M5XYwF6hRQ9fJVb100UGPT3EqZ"
            >
              <button className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded">
                Book Now
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal
        visible={showModal}
        closable={false}
        footer={false}
        title="Booked time slots"
      >
        {car.name && (
          <div className="flex flex-col gap-3">
            {car.bookedTimeSlots.map((slots) => {
              return (
                <button className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded">
                  {slots.from} - {slots.to}
                </button>
              );
            })}
            <button
              onClick={() => setShowModal(false)}
              className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded w-[120px]"
            >
              close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Booking;
