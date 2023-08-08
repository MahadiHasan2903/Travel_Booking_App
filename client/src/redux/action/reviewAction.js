import axios from "axios";
import { server } from "../../server";

export const submitReview = (tourId, reviewData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${server}/reviews/${tourId}`,
      reviewData
    );

    dispatch({ type: "submitReviewSuccess", payload: data });

    return data;
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : "An error occurred while submitting the review.";

    dispatch({ type: "submitReviewFailure", payload: errorMessage });

    throw new Error(errorMessage);
  }
};
