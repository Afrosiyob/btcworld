import { message } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS } from "../actions";
import { getProductsError, getProductsSuccess } from "./action";

function* watchGetProducts() {
  yield takeEvery(GET_PRODUCTS, workGetProducts);
}

function fetchGetProducts() {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}book/`, {
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

function* workGetProducts() {
  const { response, error } = yield call(fetchGetProducts);

  if (response) {
    yield put(getProductsSuccess(response.data));
    message.loading("kuting").then(() => message.success("success"));
  } else {
    yield put(getProductsError(error));
    message.loading("luting").then(() => message.error("error"));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetProducts)]);
}
