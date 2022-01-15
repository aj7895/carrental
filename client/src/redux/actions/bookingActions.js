import axios from "axios";
import { message } from "antd";

export const bookCar = (requestObject) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/bookings/bookcar", requestObject);
    dispatch({ type: "LOADING", payload: false });
    message.success("Your car booked successfully");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: false });
    message.error("something went wrong try again later");
  }
};

// get all bookings

export const getAllBookings = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/bookings/getallbookings");
    dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
