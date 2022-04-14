import {
  
  NEW_PICKUP_REQUEST,
  NEW_PICKUP_SUCCESS,
  NEW_PICKUP_FAIL,
  NEW_PICKUP_RESET,
  
  CLEAR_ERRORS,
} from "../constants/pickupConstants";

export const newPickupReducer = (state = { pickup: {} }, action) => {
    switch (action.type) {
      case NEW_PICKUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_PICKUP_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          pickup: action.payload.pickup,
        };
      case NEW_PICKUP_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_PICKUP_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
