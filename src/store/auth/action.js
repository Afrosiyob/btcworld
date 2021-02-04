import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";

export const userLogin = (userData) => ({
  type: USER_LOGIN,
  payload: userData,
});

export const userLoginSuccess = (resUserData) => ({
  type: USER_LOGIN_SUCCESS,
  payload: resUserData,
});

export const userLoginError = (errorMsg) => ({
  type: USER_LOGIN_ERROR,
  payload: errorMsg,
});
