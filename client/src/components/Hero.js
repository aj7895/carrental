import React from "react";

const Hero = () => {
  return (
    <div className="relative dark:bg-gray-900 h-[57vh] -mt-20 w-full">
      <img
        className="h-full w-full object-cover"
        src="https://images.pexels.com/photos/10292236/pexels-photo-10292236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-70" />
      <div className="absolute top-48 left-[153px]">
        <h3 className="text-gray-100 text-5xl leading-[57px]">
          Rental cars can
          <br /> be a experience
        </h3>
        <p className="text-gray-500 text-lg">Find your best match</p>
      </div>
    </div>
  );
};

export default Hero;
