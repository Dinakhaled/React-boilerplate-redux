import { takeEvery } from "redux-saga/effects";
import * as types from "../types";
import { fetchSaga } from "./SagaExample";

export function* watchAll() {
  yield takeEvery(types.FETCH_DATA_REQUEST, fetchSaga);
}