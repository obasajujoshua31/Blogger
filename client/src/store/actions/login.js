import React from "react";
import api from "../../utils/api";
import {
  IS_LOADING,
  SET_LOGGED_IN_USER,
  SET_LOGIN_ERROR,
  SET_REGISTER_ERROR,
} from "../types";
import { API_URL } from "../../utils/constants";

export const loginUser = (payload, props, alert, dispatch) => {
  dispatch({ type: IS_LOADING });

  return api
    .post(`${API_URL}/auth/login`, payload)
    .then(data => {
      localStorage.setItem("userToken", data.token);

      dispatch({
        type: SET_LOGGED_IN_USER,
      });
      if (props.location.from) {
        props.history.push(props.location.from);
      } else {
        props.history.push("/");
      }
      alert.show(<div style={{ color: "green" }}>You are now Logged In</div>);
    })
    .catch(error => {
      dispatch({
        type: SET_LOGIN_ERROR,
        payload: error.message,
      });
      alert.show(<div style={{ color: "red" }}>{error.message}</div>);
    });
};

export const registerUser = (payload, history, alert, dispatch) => {
  dispatch({ type: IS_LOADING });

  return api
    .post(`${API_URL}/auth/register`, payload)
    .then(data => {
      localStorage.setItem("userToken", data.data);

      dispatch({
        type: SET_LOGGED_IN_USER,
      });
      history.push("/");
      alert.show(<div style={{ color: "green" }}>You are Welcome</div>);
    })
    .catch(error => {
      dispatch({
        type: SET_REGISTER_ERROR,
        payload: error.message,
      });
      alert.show(<div style={{ color: "red" }}>{error.message}</div>);
    });
};
