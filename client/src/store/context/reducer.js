import {
  IS_LOADING,
  SET_LOGGED_IN_USER,
  SET_LOGIN_ERROR,
  SET_REGISTER_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case SET_LOGGED_IN_USER: {
      return { ...state, isLoggedIn: true, isLoading: false };
    }
    case SET_LOGIN_ERROR: {
      const error = { login: action.payload };
      return { ...state, isLoading: false, error };
    }
    case SET_REGISTER_ERROR: {
      const error = { register: action.payload };
      return { ...state, isLoading: false, error };
    }
    default:
      return state;
  }
};
