import {
  USER_AUTO_LOGIN,
  USER_AUTO_LOGIN_ERROR,
  USER_AUTO_LOGIN_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
} from "../actions";

export const userLogin = (userData, history) => ({
  type: USER_LOGIN,
  payload: { userData, history },
});

export const userLoginSuccess = (resUserData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: resUserData,
});

export const userLoginError = (errorMsg) => ({
  type: USER_LOGIN_ERROR,
  payload: errorMsg,
});

export const userAutoLogin = () => ({
  type: USER_AUTO_LOGIN,
});

export const userAutoLoginSuccess = (response) => ({
  type: USER_AUTO_LOGIN_SUCCESS,
  payload: response,
});

export const userAutoLoginError = (errorMsg) => ({
  type: USER_AUTO_LOGIN_ERROR,
  payload: errorMsg,
});
