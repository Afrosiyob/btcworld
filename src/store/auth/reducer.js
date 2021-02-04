import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";

const INIT_STATE = {
  sendLoading: false,
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

    default:
      return { ...state };
  }
};
