import { all } from "redux-saga/effects";
import userSaga from "./auth/saga";
import treeSaga from "./tree/saga";
import productsSaga from "./products/saga";
import plansSaga from "./plans/saga";
import sendMethodSaga from "./paymnet/method/saga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    treeSaga(),
    productsSaga(),
    plansSaga(),
    sendMethodSaga(),
  ]);
}
