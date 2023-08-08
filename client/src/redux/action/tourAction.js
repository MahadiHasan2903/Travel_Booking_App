import axios from "axios";
import { server } from "../../server";

// Action creator for fetching featured tours
export const getFeaturedTours = () => async (dispatch) => {
  try {
    dispatch({ type: "getFeaturedToursRequest" });

    const { data } = await axios.get(`${server}/tours/search/getFeaturedTour`);

    dispatch({ type: "getFeaturedToursSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getFeaturedToursFailure", payload: error.message });
  }
};

// Action creator for fetching tours
export const fetchTours = () => async (dispatch) => {
  try {
    dispatch({ type: "getToursRequest" });

    const { data } = await axios.get(`${server}/tours`);

    dispatch({ type: "getToursSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getToursFailure", payload: error.message });
  }
};

// Action creator for fetching tour count
export const fetchTourCount = () => async (dispatch) => {
  try {
    dispatch({ type: "getTourCountRequest" });

    const { data } = await axios.get(`${server}/tours/search/getTourCount`);

    dispatch({ type: "getTourCountSuccess", payload: data.data });
  } catch (error) {
    dispatch({ type: "getTourCountFailure", payload: error.message });
  }
};

export const getSingleTour = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getSingleTourRequest" });

    const { data } = await axios.get(`${server}/tours/${id}`);

    dispatch({ type: "getSingleTourSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getSingleTourFailure", payload: error.message });
  }
};
