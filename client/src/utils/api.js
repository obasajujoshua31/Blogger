import axios from "axios";

export default {
  post: function(url, payload) {
    return new Promise((resolve, reject) => {
      return axios
        .post(url, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },

  get: function(url) {
    return new Promise((resolve, reject) => {
      return axios
        .get(url)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    });
  },
};
