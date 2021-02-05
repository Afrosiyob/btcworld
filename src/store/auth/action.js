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

export const userLogOut = (history) => ({
  type: USER_LOG_OUT,
  payload: history,
});

export const userLogOutSuccess = (response) => ({
  type: USER_LOG_OUT_SUCCESS,
  payload: response,
});

export const userLogOutError = (errorMsg) => ({
  type: USER_LOG_OUT_ERROR,
  payload: errorMsg,
});

export const regUser = (userData) => ({
  type: REG_USER,
  payload: userData,
});

export const regUserSuccess = (response) => ({
  type: REG_USER_SUCCESS,
  payload: response,
});

export const regUserError = (error) => ({
  type: REG_USER_ERROR,
  payload: error,
});
