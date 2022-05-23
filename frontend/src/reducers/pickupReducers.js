import {
  
  NEW_PICKUP_REQUEST,
  NEW_PICKUP_SUCCESS,
  NEW_PICKUP_FAIL,
  NEW_PICKUP_RESET,
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

  export const pickupsReducer = (state = { products: [] }, action) => {

    switch (action.type) {
   
      case ADMIN_PICKUP_REQUEST:
        return {
          loading: true,
          pickups: [],
        };
      
      case ADMIN_PICKUP_SUCCESS:
        return {
          loading: false,
          pickups: action.payload,
        };
  
     
      case ADMIN_PICKUP_FAIL:
        return {
          loading: false,
          error: action.payload,
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

  export const pickupReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PICKUP_REQUEST:
      case UPDATE_PICKUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PICKUP_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_PICKUP_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PICKUP_FAIL:
      case UPDATE_PICKUP_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_PICKUP_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_PICKUP_RESET:
        return {
          ...state,
          isUpdated: false,
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
  
  
