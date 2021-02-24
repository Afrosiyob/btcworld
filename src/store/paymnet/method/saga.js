import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SEND_METHOD } from "../../actions";
import { sendMethodError, sendMethodSuccess } from "./action";
import { message } from "antd";

function* watchSendMethod() {
  yield takeEvery(SEND_METHOD, workSendMethod);
}

function fetchSendMethod(method) {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}buy/`, method, {
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

function* workSendMethod({ payload }) {
  const method = payload;
  const { response, error } = yield call(fetchSendMethod, method);
  if (response) {
    yield put(sendMethodSuccess(response.data));
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(sendMethodError(error));
    message.loading("kuting").then(() => message.error(error));
  }
}

export default function* rootSaga() {
  yield all([fork(watchSendMethod)]);
}
