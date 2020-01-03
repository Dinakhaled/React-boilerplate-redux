import { put, call } from "redux-saga/effects";
import API from "../../network/apis";
import { action } from "../actions";

export function* fetchSaga() {
  try {
    const response = yield call(API.get);
    yield put(action(response.data));
  } catch (err) {
    console.log(err);
  }
}