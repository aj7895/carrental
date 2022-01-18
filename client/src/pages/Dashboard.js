import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { Link } from "react-router-dom";
import { getCars } from "../redux/actions/carsActions";
import { getUsers } from "../redux/actions/userAction";
import { navData } from "../constant/data";

// components
import Users from "../components/Users.js";
import Cars from "../components/Cars.js";

// progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

const Dashboard = () => {
  console.log(navData);
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [totalCars, setTotalcars] = useState([]);
  const [navTo, setNavTo] = useState(0);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    setTotalcars(cars);
  }, [cars]);

  return (
    <>
      <div className="-mt-20 h-[327px] w-screen">
        <img className="w-full h-full object-cover" src="/admin.svg"></img>
      </div>
      <div class="mb-14 mt-2 border-b border-gray-200 shadow-sm">
        <ul class="flex flex-wrap w-[790px] mx-auto -mb-px">
          {navData.map((data) => (
            <li class="mr-2">
              <button
                onClick={() => {
                  {
                    data.id === 1
                      ? setNavTo(1)
                      : data.id === 2
                      ? setNavTo(2)
                      : data.id === 3
                      ? setNavTo(3)
                      : setNavTo(0);
                  }
                }}
                class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
              >
                {data.name}
              </button>
            </li>
          ))}
          <Link
            className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            to="/addcar"
          >
            Add new car
          </Link>
        </ul>
      </div>

      {navTo === 1 && <Users user={users} />}
      {navTo === 2 && <Cars cars={totalCars} />}

      <div className="flex flex-wrap gap-20 justify-center my-20">
        {loading == true ? progress.start() : progress.finish()}
      </div>
    </>
  );
};

export default Dashboard;
