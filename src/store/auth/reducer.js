import {
  REG_USER,
  REG_USER_ERROR,
  REG_USER_SUCCESS,
  USER_AUTO_LOGIN,
  USER_AUTO_LOGIN_ERROR,
  USER_AUTO_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
  USER_LOG_OUT_ERROR,
  USER_LOG_OUT_SUCCESS,
} from "../actions";

const INIT_STATE = {
  sendLoading: false,
  autoLoading: false,
  logOutLoading: false,
  regLoading: false,
  userData: [],
  error: "",
};

export const userReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return { ...state, sendLoading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, sendLoading: false, userData: payload };

    case USER_LOGIN_ERROR:
      return { ...state, sendLoading: false, error: payload };

    case USER_AUTO_LOGIN:
      return { ...state, autoLoading: true };

    case USER_AUTO_LOGIN_SUCCESS:
      return { ...state, autoLoading: false, userData: payload };

    case USER_AUTO_LOGIN_ERROR:
      return { ...state, autoLogin: false, error: payload };

    case USER_LOG_OUT:
      return { ...state, logOutLoading: true };

    case USER_LOG_OUT_SUCCESS:
      return { ...state, logOutLoading: false };

    case USER_LOG_OUT_ERROR:
      return { ...state, logOutLoading: false, error: payload };

    case REG_USER:
      return { ...state, regLoading: true };

    case REG_USER_SUCCESS:
      return { ...state, regLoading: false };

    case REG_USER_ERROR:
      return { ...state, regLoading: false, error: payload };

    default:
      return { ...state };
  }
};
