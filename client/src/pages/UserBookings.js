import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions.js";
import moment from "moment";

const UserBookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <div>
      <h3 className="mx-auto w-96 my-14 text-3xl font-semibold">
        All of your recents bookings
      </h3>
      <div className="flex flex-col gap-7 mx-auto w-[57%] my-7">
        {bookings
          .filter((o) => o.user == user._id)
          .map((booking) => (
            <div className="flex items-center gap-7 bg-gray-50 px-7 py-5 rounded shadow-sm text-gray-700">
              <div>
                <img className="w-[87%]" src={booking.car.image} alt="" />
              </div>
              <div className="text-[16px]">
                <p className="flex gap-10">
                  Car Name -{" "}
                  <span className="font-medium"> {booking.car.name}</span>
                </p>
                <p className="flex gap-10">
                  Total Hours -
                  <span className="font-medium"> {booking.totalHours}</span>
                </p>
                <p className="flex gap-10">
                  Total Amount -
                  <span className="font-medium"> {booking.totalAmount}</span>
                </p>
                <p className="flex gap-10">
                  Transaction ID -
                  <span className="font-medium"> {booking.transactionId}</span>
                </p>
                <p className="flex gap-10">
                  From -
                  <span className="font-medium">
                    {booking.bookedTimeSlots.from}
                  </span>
                </p>
                <p className="flex gap-10">
                  To -
                  <span className="font-medium">
                    {booking.bookedTimeSlots.to}
                  </span>
                </p>
                <p className="flex gap-10">
                  Date of booking -
                  <span className="font-medium">
                    {moment(booking.createdAt).format("MMM DD yyy")}
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserBookings;
