import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "registerUserRequest" });

    const { data } = await axios.post(`${server}/users/register`, userData);

    dispatch({ type: "registerUserSuccess", payload: data });

    // Show success toast message and clear input fields
    toast.success("User Successfully Created");
    return data; // Return data for component to handle
  } catch (error) {
    dispatch({ type: "registerUserFailure", payload: error.message });

    // Show error toast message and clear input fields
    toast.error("Something went wrong");
    throw error; // Rethrow error for component to handle
  }
};

// loginUser action (authActions.js)
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: "loginUserRequest" });

    const { data } = await axios.post(`${server}/users/login`, credentials);

    dispatch({ type: "loginUserSuccess", payload: data });

    return data;
  } catch (error) {
    dispatch({ type: "loginUserFailure", payload: error.message });
    throw error;
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.get(`${server}/users/logout`);

    dispatch({ type: "logoutUserSuccess" });
    return true; // Return success status for component to handle
  } catch (error) {
    dispatch({ type: "logoutUserFailure", payload: error.message });
    throw error; // Rethrow error for component to handle
  }
};
