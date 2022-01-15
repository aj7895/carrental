import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, Space } from "antd";

// pages
import { Home, Login, Register, Booking } from "../pages/Index";

const Header = () => {
  // getting user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // antd
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/userbookings">Bookings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.aliyun.com">Profile</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li>Logout</li>
      </Menu.Item>
    </Menu>
  );
  // antd

  return (
    <header className="flex bg-transparent shadow-lg items-center list-none justify-between text-gray-50 h-[80px] px-40">
      <Link className="z-50" to="/">
        <img className="" src="/logo.svg" alt="" />
      </Link>

      <nav className=" z-50 flex items-center font-medium gap-7">
        <li>
          <a className="text-gray-400" href="">
            Find your car
          </a>
        </li>
        <li>
          <a className="text-gray-400" href="">
            Become a host
          </a>
        </li>
        <li>
          <a className="text-gray-400" href="">
            How it works
          </a>
        </li>
      </nav>
      {/* profile */}
      <div className="">
        <Dropdown className="z-50" overlay={menu} placement="bottomCenter">
          <Button>{user && user.username}</Button>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
