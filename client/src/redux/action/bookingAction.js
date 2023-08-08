import axios from "axios";
import { server } from "../../server";

export const bookTour = (bookingData) => async (dispatch) => {
  try {
    dispatch({ type: "bookTourRequest" });

    const { data } = await axios.post(`${server}/bookings`, bookingData);

    dispatch({ type: "bookTourSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "bookTourFailure", payload: error.message });
  }
};
