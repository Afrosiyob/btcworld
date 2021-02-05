import { message } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { USER_AUTO_LOGIN, USER_LOGIN } from "../actions";
import {
  userAutoLoginError,
  userAutoLoginSuccess,
  userLoginError,
  userLoginSuccess,
} from "./action";

function* watchUserLogin() {
  yield takeEvery(USER_LOGIN, workUserLogin);
}

function fetchworkUserLogin(userData) {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/login/`, userData)
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      return { error };
    });
}

function* workUserLogin({ payload }) {
  const { userData, history } = payload;
  const { response, error } = yield call(fetchworkUserLogin, userData);

  if (response) {
    yield put(userLoginSuccess(response.data));
    localStorage.setItem("token", response.data.token);
    history.push("/admin");
    message.loading("kuting").then(() => message.success("success"));
  } else {
    message.loading("kuting").then(() => message.error("error"));
    yield put(userLoginError(error));
  }
}

function* watchUserAutoLogin() {
  yield takeEvery(USER_AUTO_LOGIN, workUserAutoLogin);
}

function fetchUserAutoLogin() {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}login/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      return { error };
    });
}

function* workUserAutoLogin() {
  const { response, error } = yield call(fetchUserAutoLogin);

  if (response) {
    yield put(userAutoLoginSuccess(response.data));
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(userAutoLoginError(error));
    message
      .loading("kuting")
      .then(() => message.warning("Siz Ro'yxatdan o'tmagansiz"));
  }
}

export default function* rootSaga() {
  yield all([fork(watchUserLogin), fork(watchUserAutoLogin)]);
}
