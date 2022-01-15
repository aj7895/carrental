import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cars }) => {
  return (
    <div className="flex flex-wrap gap-20 justify-center my-20">
      {cars.map((car) => (
        <div className="flex justify-center">
          <div className="rounded-lg shadow-sm hover:-translate-y-2 duration-300 transition  bg-gray-50 max-w-sm">
            <a href="#!">
              <img className="rounded-t-lg" src={car.image} alt="" />
            </a>
            <div className="px-7 py-1">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {car.name}
              </h5>
              <div className="flex w-full justify-between items-center">
                <p className="tracking-wide text-md font-medium">
                  Rent per hour<b> {car.rentPerHour}</b> /-
                </p>
                <Link
                  className="border-red-400 mb-4 text-gray-700 font-medium w-24 h-8 flex items-center justify-center border-2 rounded"
                  to={`/booking/${car._id}`}
                >
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
