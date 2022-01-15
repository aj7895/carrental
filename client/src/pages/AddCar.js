import React from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { addCar } from "../redux/actions/carsActions";

const AddCar = () => {
  const dispatch = useDispatch();
  function onFinish(values) {
    values.bookedTimeSlots = [];
    dispatch(addCar(values));
  }
  return (
    <div className="w-[570px] mx-auto my-20 shadow-sm bg-gray-50 px-7 py-7">
      <Form className="bs1 p-2" layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Car name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Image url" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="rentPerHour"
          label="Rent per hour"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="capacity"
          label="Capacity"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="fuelType"
          label="Fuel Type"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <button className="border-red-400 text-gray-700 font-medium px-4 py-1 border-2 rounded w-[120px]">
          Add Car
        </button>
      </Form>
    </div>
  );
};

export default AddCar;
