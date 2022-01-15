import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editCar } from "../redux/actions/carsActions";
import { getCars } from "../redux/actions/carsActions";

const EditCars = ({ match }) => {
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  const [car, setCar] = useState();
  const [totalCars, setTotalCars] = useState([]);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getCars());
    } else {
      setTotalCars(cars);
      setCar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  function onFinish(values) {
    values._id = car._id;
    dispatch(editCar(values));
  }

  return (
    <div className="w-[570px] mx-auto my-20 shadow-sm bg-gray-50 px-7 py-7">
      {totalCars.length > 0 && (
        <Form
          initialValues={car}
          className="bs1 p-2"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item name="name" label="Car name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image url"
            rules={[{ required: true }]}
          >
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
            Update
          </button>
        </Form>
      )}
    </div>
  );
};

export default EditCars;
