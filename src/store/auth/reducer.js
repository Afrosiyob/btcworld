import {
  USER_AUTO_LOGIN,
  USER_AUTO_LOGIN_ERROR,
  USER_AUTO_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from "../actions";

const INIT_STATE = {
  sendLoading: false,
  autoLoading: false,
  userData: [],
  errorMsg: "",
};

export const userReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, sendLoading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, sendLoading: false, userData: payload };

    case USER_LOGIN_ERROR:
      return { ...state, sendLoading: false, errorMsg: payload };

    case USER_AUTO_LOGIN:
      return { ...state, autoLoading: true };

    case USER_AUTO_LOGIN_SUCCESS:
      return { ...state, autoLoading: false, userData: payload };

    case USER_AUTO_LOGIN_ERROR:
      return { ...state, autoLogin: false, error: payload };

    default:
      return { ...state };
  }
};
