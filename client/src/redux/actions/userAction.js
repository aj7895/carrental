import axios from "axios";
import { message } from "antd";

// get all users

export const getUsers = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/users/getallusers");
    console.log(response.data);
    dispatch({ type: "GET_ALL_USERS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

// login
export const userLogin = (requestObject) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/users/login", requestObject);
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
    dispatch({ type: "LOADING", payload: false });
    message.success("Login successfull");
    window.location.href = "/";
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

// register
export const userRegister = (requestObject) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/users/register", requestObject);
    message.success("Your registration is successfull");
    window.location.href = "/login";
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

// edit user
export const editUser = (requestObject) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    await axios.post("/api/users/edituser", requestObject);
    message.success("User updated successfully");
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
