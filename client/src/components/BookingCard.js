import React from "react";

const BookingCard = ({ car }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-gray-50 w-[1280px] rounded shadow-sm flex gap-7 text-gray-700">
          <img className="h-full rounded-l-sm" src={car.image} alt={car.name} />
          <div className="w-full flex flex-col">
            <div className="py-4 pb-0 flex-1 px-7">
              <h3 className="font-semibold text-3xl mb-7">{car.name}</h3>
              <div className="text-lg flex items-center mb-4">
                <span className="mr-1 text-grey-dark">Max Capacity -</span>
                <b> {car.capacity}</b>
              </div>
              <div className="text-lg flex items-center mb-4">
                <span className="text-lg">Rent per hour -</span>
                <b> {car.rentPerHour} /-</b>
              </div>
              <div className="text-lg flex items-center mb-4">
                <span className="text-lg">Fuel type -</span>
                <b> {car.fuelType}</b>
              </div>
              <div className="text-lg text-gray-500 flex items-center mb-4">
                <span className="text-lg">
                  The third generation Swift has just completed a three year
                  stint, expectedly setting sales charts on fire. Perfect time
                  to introduce a juicy upgrade and take the fun hatch to the
                  next level, you’d think. And lo, Maruti Suzuki has served up
                  an updated version. Sadly, at first glance, it seems like a
                  half-hearted attempt at a facelift. Should you expect more of
                  the same from the Swift, then?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
