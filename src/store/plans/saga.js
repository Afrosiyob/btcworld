import { message } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_PLANS } from "../actions";

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
    console.log(" plans response ====================================");
    console.log(response);
    console.log("====================================");
  } else {
    console.log(" plans error ====================================");
    console.log(error);
    console.log("====================================");
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetPlans)]);
}
