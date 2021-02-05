import { all } from "redux-saga/effects";
import userSaga from "./auth/saga";
import treeSaga from "./tree/saga";

export default function* rootSaga() {
  yield all([userSaga(), treeSaga()]);
}
