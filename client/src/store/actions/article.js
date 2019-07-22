import api from "../../utils/api";
import {
  IS_LOADING,
  GET_ARTICLES,
  SET_ERROR,
  GET_ARTICLE,
  CREATE_COMMENT,
} from "../types";
import { API_URL } from "../../utils/constants";

export const getArticles = dispatch => {
  dispatch({
    type: IS_LOADING,
  });
  return api
    .get(`${API_URL}/article`)
    .then(data => {
      dispatch({
        type: GET_ARTICLES,
        payload: data.data,
      });
    })
    .catch(error => {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    });
};

export const getArticle = (id, dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
  return api
    .get(`${API_URL}/article/${id}`)
    .then(data => {
      dispatch({
        type: GET_ARTICLE,
        payload: data.data,
        articles: data.articles,
      });
    })
    .catch(error => {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    });
};

export const createComment = (article_id, content, dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
  return api
    .post(`${API_URL}/comment/${article_id}`, { content })
    .then(data => {
      dispatch({
        type: CREATE_COMMENT,
        payload: data.data,
      });
    })
    .catch(error => {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    });
};
