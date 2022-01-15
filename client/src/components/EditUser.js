import React from "react";
import { Popconfirm, message } from "antd";
import { Link } from "react-router-dom";

const EditUser = ({ user }) => {
  return (
    <div>
      <div className=" w-[370px] h-[300px] bg-gray-50 shadow-sm hover:-translate-y-2 duration-300 transition rounded overflow-hidden">
        {/* <img
              className=" object-cover w-full h-[70%]"
              src={car.image}
              alt=""
            /> */}
        <div className="flex flex-col pt-1">
          <p className="tracking-wide text-md px-7 font-semibold">
            {user.username}
          </p>
          <div className="flex w-full justify-between px-14 py-1 items-center">
            <Link
              className="border-red-400 text-gray-700 font-medium px-5 py-1 border-2 rounded"
              to={`/edituser/${user._id}`}
            >
              Edit
            </Link>
            <Popconfirm
              title="Are you sure to delete this Car?"
              onConfirm={() => {
                // dispatch(deleteCar({ carid: car._id }));
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
    </div>
  );
};

export default EditUser;
