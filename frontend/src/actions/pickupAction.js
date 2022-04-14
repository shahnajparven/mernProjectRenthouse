import axios from "axios";
import {
  
  NEW_PICKUP_REQUEST,
  NEW_PICKUP_SUCCESS,
  NEW_PICKUP_FAIL,
  
  CLEAR_ERRORS,
} from "../constants/pickupConstants";




// Create Product
export const createPickup = (pickupData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PICKUP_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1//pickup/new`,
      pickupData,
      config
    );

    dispatch({
      type: NEW_PICKUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PICKUP_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};