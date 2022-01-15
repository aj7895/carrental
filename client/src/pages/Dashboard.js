import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProgressBar from "@badrap/bar-of-progress";
import { Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { getCars } from "../redux/actions/carsActions";
import { getUsers } from "../redux/actions/userAction";
import { deleteCar } from "../redux/actions/carsActions";

import EditUser from "../components/EditUser.js";

// progress bar
const progress = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

const Dashboard = () => {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [totalCars, setTotalcars] = useState([]);

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
      <div className="flex gap-7 my-7">
        {users.map((user) => (
          <EditUser user={user} />
        ))}
      </div>

      <div className="my-7 ml-24">
        <Link
          className="border-red-400 text-lg text-gray-700 font-medium px-4 py-1 border-2 rounded"
          to="/addcar"
        >
          Add new car
        </Link>
      </div>
      <div className="flex flex-wrap gap-20 justify-center my-20">
        {loading == true ? progress.start() : progress.finish()}
        {totalCars.map((car) => (
          <div className=" w-[370px] h-[300px] bg-gray-50 shadow-sm hover:-translate-y-2 duration-300 transition rounded overflow-hidden">
            <img
              className=" object-cover w-full h-[70%]"
              src={car.image}
              alt=""
            />
            <div className="flex flex-col pt-1">
              <p className="tracking-wide text-md px-7 font-semibold">
                {car.name}
              </p>
              <div className="flex w-full justify-between px-14 py-1 items-center">
                <Link
                  className="border-red-400 text-gray-700 font-medium px-5 py-1 border-2 rounded"
                  to={`/editcar/${car._id}`}
                >
                  Edit
                </Link>
                <Popconfirm
                  title="Are you sure to delete this Car?"
                  onConfirm={() => {
                    dispatch(deleteCar({ carid: car._id }));
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <a className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded">
                    Delete
                  </a>
                </Popconfirm>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
