import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/actions/userAction.js";
import { getUsers } from "../redux/actions/userAction.js";

const EditUser = ({ match }) => {
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [totalUsers, setTotalUsers] = useState([]);

  useEffect(() => {
    if (users.length == 0) {
      dispatch(getUsers());
    } else {
      setTotalUsers(users);
      setUser(users.find((o) => o._id == match.params.userid));
    }
  }, [users]);

  function onFinish(values) {
    values._id = user._id;
    dispatch(editUser(values));
  }

  return (
    <div className="w-[570px] mx-auto my-20 shadow-sm bg-gray-50 px-7 py-7">
      {totalUsers.length > 0 && (
        <Form
          initialValues={user}
          className="bs1 p-2"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="type" label="User type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <button className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded w-[120px]">
            Update
          </button>
        </Form>
      )}
    </div>
  );
};

export default EditUser;
