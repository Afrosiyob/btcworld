import { message, notification } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  ACTIVATE_USER,
  EDIT_USER,
  REG_USER,
  USER_AUTO_LOGIN,
  USER_LOGIN,
  USER_LOG_OUT,
} from "../actions";
import {
  editUserError,
  editUserSuccess,
  userAutoLoginError,
  userAutoLoginSuccess,
  userLoginError,
  userLoginSuccess,
  userLogOutError,
  userLogOutSuccess,
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
    message
      .loading("kuting")
      .then(() => message.error(error.response.data.non_field_errors[0]));
    yield put(userLoginError(error.response.data.non_field_errors[0]));
  }
}

function* watchUserLogOutUser() {
  yield takeEvery(USER_LOG_OUT, workUserLogOut);
}

function fetchUserLogOut() {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/logout/`, {
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

function* workUserLogOut({ payload }) {
  const history = payload;
  const { response, error } = yield call(fetchUserLogOut);

  if (response) {
    yield put(userLogOutSuccess());
    history.push("/");
    window.location.reload();
    localStorage.removeItem("token");
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(userLogOutError(error.response.data.non_field_errors[0]));
    message
      .loading("kuting")
      .then(() => message.error(error.response.data.non_field_errors[0]));
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

function* workUserAutoLogin({ payload }) {
  const history = payload;
  const { response, error } = yield call(fetchUserAutoLogin);

  if (response) {
    yield put(userAutoLoginSuccess(response.data));
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(userAutoLoginError(error.response.data.non_field_errors[0]));
    history.push("/");
    message
      .loading("kuting")
      .then(() => message.warning("Siz Ro'yxatdan o'tmagansiz"));
  }
}

function* watchRegUser() {
  yield takeEvery(REG_USER, workRegUser);
}

function fetchRegUser(userData) {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}register/`, userData)
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      return { error };
    });
}

function* workRegUser({ payload }) {
  const userData = payload;
  const { response, error } = yield call(fetchRegUser, userData);

  if (response) {
    console.log(" reg res ====================================");
    console.log(response);
    console.log("====================================");

    notification.success({
      message: `Auth`,
      description:
        "Siz muvofaqqiyatli ro'yxatdan o'tdingiz iltimos gmailingizni tekshiring",
      placement: "topRight",
    });
  } else {
    console.log(" reg error ====================================");
    console.log(error.response.data.non_field_errors[0]);
    console.log("====================================");
  }
}

function* watchEditUser() {
  yield takeEvery(EDIT_USER, workEditUser);
}

function fetchEditUser(userData) {
  return axios
    .put(`${process.env.REACT_APP_SERVER_URL}update/`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
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

function* workEditUser({ payload }) {
  const userData = payload;

  const { response, error } = yield call(fetchEditUser, userData);

  if (response) {
    yield put(editUserSuccess(response.data));

    message
      .loading("kuting")
      .then(() => message.success("malumotlar muffaqiyatli uzgartirildi"));
  } else {
    yield put(editUserError(error));

    message.loading("kuting").then(() => message.error("error"));
  }
}

function* watchActivateUser() {
  yield takeEvery(ACTIVATE_USER, workActivateUser);
}

function fetchActivateUser(activateData) {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}activate/`, activateData)
    .then((response) => {
      return { response };
    })
    .catch((error) => {
      return { error };
    });
}

function* workActivateUser({ payload }) {
  const activateData = payload;
  const { response, error } = yield call(fetchActivateUser, activateData);
  if (response) {
    console.log(" activate res ====================================");
    console.log(response);
    console.log("====================================");
  } else {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchUserLogin),
    fork(watchUserAutoLogin),
    fork(watchUserLogOutUser),
    fork(watchRegUser),
    fork(watchEditUser),
    fork(watchActivateUser),
  ]);
}
