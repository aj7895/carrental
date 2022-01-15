import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { Link } from "react-router-dom";
import { getCars } from "../redux/actions/carsActions";
import moment from "moment";
// antd
import { DatePicker } from "antd";
// components
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Card from "../components/Card";

const { RangePicker } = DatePicker;
// progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

const Home = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();
  const [totalCars, setTotalCars] = useState([]);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  // filtering
  useEffect(() => {
    setTotalCars(cars);
  }, [cars]);

  function setFilter(values) {
    var selectedFrom = moment(values[0], "MMM DD yyyy HH:mm");
    var selectedTo = moment(values[1], "MMM DD yyyy HH:mm");
    var tempCars = [];
    for (var car of cars) {
      if (car.bookedTimeSlots.length == 0) {
        tempCars.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            tempCars.push(car);
          }
        }
      }
    }
    setTotalCars(tempCars);
  }

  return (
    <>
      <Hero />
      {/* hero */}
      <div className="flex mx-auto flex-col items-center justify-center py-4 w-[570px] mt-4 mb-10">
        <p className="text-xl leading-3 font-semibold text-gray-700">
          Selct date to check availability
        </p>
        <RangePicker onChange={setFilter} />
      </div>

      {/* range picker */}
      {loading == true ? progress.start() : progress.finish()}
      <Card cars={totalCars} />
      <Footer />
    </>
  );
};

export default Home;
