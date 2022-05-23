import axios from "axios";
import {
  
  NEW_PICKUP_REQUEST,
  NEW_PICKUP_SUCCESS,
  NEW_PICKUP_FAIL,
  ADMIN_PICKUP_REQUEST,
  ADMIN_PICKUP_SUCCESS,
  ADMIN_PICKUP_FAIL,
  UPDATE_PICKUP_REQUEST,
  UPDATE_PICKUP_SUCCESS,
  UPDATE_PICKUP_RESET,
  UPDATE_PICKUP_FAIL,
  DELETE_PICKUP_REQUEST,
  DELETE_PICKUP_SUCCESS,
  DELETE_PICKUP_RESET,
  DELETE_PICKUP_FAIL,
  
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

// Get All Pickup For Admin
export const getAdminPickup = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PICKUP_REQUEST });

    const { data } = await axios.get("/api/v1/admin/pickups");

    dispatch({
      type: ADMIN_PICKUP_SUCCESS,
      payload: data.pickups,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PICKUP_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Update Pickup
export const updatePickup = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PICKUP_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/pickup/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PICKUP_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PICKUP_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deletePickup = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PICKUP_REQUEST });

    const { data } = await axios.delete(`/api/v1/pickup/${id}`);

    dispatch({
      type: DELETE_PICKUP_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PICKUP_FAIL,
      payload: error.response.data.message,
    });
  }
};



// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};