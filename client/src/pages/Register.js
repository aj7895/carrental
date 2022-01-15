import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "../redux/actions/userAction";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });

  console.log(values);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(values));
  };
  return (
    <div>
      <div className="flex mx-auto my-32 flex-col w-[740px] px-4 py-8 rounded-lg shadow sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto text-3xl font-semibold">
          Create a new account
        </div>
        <span className="justify-center my-3 text-sm text-center text-gray-500 flex-items-center">
          Already have an account ?
          <Link
            to="/login"
            className="text-md text-red-400 underline hover:text-red-700"
          >
            Sign in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  value={values.username}
                  onChange={handleInputs}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  name="username"
                  placeholder="username"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleInputs}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  name="confirmpassword"
                  value={values.confirmpassword}
                  onChange={handleInputs}
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                onClick={handleSubmit}
                className="py-2 px-4 w-[140px] mx-auto border-2 border-red-400 text-red-400 transition ease-in duration-200 text-center text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
