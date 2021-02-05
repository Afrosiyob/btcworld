import { message } from "antd";
import axios from "axios";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_TREE } from "../actions";
import { getTreeError, getTreeSuccess } from "./action";

function* watchGetTree() {
  yield takeEvery(GET_TREE, workGetTree);
}

function fetchGetTree(user_id) {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}tree/${user_id}`, {
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

function* workGetTree({ payload }) {
  const user_id = payload;
  const { response, error } = yield call(fetchGetTree, user_id);

  if (response) {
    console.log(" tree data ====================================");
    console.log(response);
    console.log("====================================");
    yield put(getTreeSuccess(response.data));
    message.loading("waiting").then(() => message.success("success"));
  } else {
    yield put(getTreeError(error));
    message.loading("waiting").then(() => message.error("error"));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetTree)]);
}
