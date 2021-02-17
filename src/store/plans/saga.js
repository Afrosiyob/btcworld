import { message } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_PLANS } from "../actions";
import { getPlansError, getPlansSuccess } from "./action";

function* watchGetPlans() {
  yield takeEvery(GET_PLANS, workGetPlans);
}

function fetchGetPlans() {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}plan/`, {
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

function* workGetPlans() {
  const { response, error } = yield call(fetchGetPlans);

  if (response) {
    yield put(getPlansSuccess(response.data));
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(getPlansError(error));
    message.loading("kuting").then(() => message.error(error));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetPlans)]);
}
