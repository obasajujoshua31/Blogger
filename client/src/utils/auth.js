import React from "react";

export default {
  authenticate() {
    const token = localStorage.getItem("userToken");
    if (token) {
      return true;
    }
    return false;
  },

  logout(e, history, alert) {
    e.preventDefault();
    localStorage.removeItem("userToken");
    history.push("/");
    alert.show(<div style={{ color: "green" }}>You are now Logged out</div>);
  },
};
