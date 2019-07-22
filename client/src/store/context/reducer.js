import {
  IS_LOADING,
  SET_LOGGED_IN_USER,
  SET_LOGIN_ERROR,
  SET_REGISTER_ERROR,
  GET_ARTICLES,
  GET_ARTICLE,
  CREATE_COMMENT,
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
    case GET_ARTICLES: {
      return { ...state, isLoading: false, articles: action.payload };
    }
    case GET_ARTICLE: {
      return {
        ...state,
        isLoading: false,
        article: action.payload,
        articles: action.articles,
      };
    }

    case CREATE_COMMENT: {
      const comments = [...state.article.Comments, action.payload];
      return {
        ...state,
        isLoading: false,
        article: { ...state.article, Comments: comments },
      };
    }
    default:
      return state;
  }
};
