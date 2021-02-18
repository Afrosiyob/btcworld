import {
  SEND_METHOD,
  SEND_METHOD_ERROR,
  SEND_METHOD_SUCCESS,
} from "../../actions";

export const sendMethod = (method) => ({
  type: SEND_METHOD,
  payload: method,
});

export const sendMethodSuccess = (response) => ({
  type: SEND_METHOD_SUCCESS,
  payload: response,
});

export const sendMethodError = (error) => ({
  type: SEND_METHOD_ERROR,
  payload: error,
});
