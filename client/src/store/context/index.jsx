import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  blogs: [],
  blog: {},
  error: {},
  isLoggedIn: false,
};
export const context = createContext(initialState);

function Provider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        store,
        dispatch,
      }}
    >
      {props.children}
    </context.Provider>
  );
}
export default Provider;
