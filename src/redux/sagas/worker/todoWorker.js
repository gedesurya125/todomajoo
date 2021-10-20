import { put } from "redux-saga/effects";
import {
  setLoadingTodoAction,
  setTodoAction,
  unsetLoadingTodoAction,
} from "../../actions/todoActions";
import { getTodoApi } from "../../apis/todoApi";

export function* getTodoWorker(action) {
  try {
    yield put(setLoadingTodoAction());
    const response = yield getTodoApi();
    if (response.data) {
      yield put(setTodoAction(response.data));
      yield put(unsetLoadingTodoAction());
    } else {
      yield put(unsetLoadingTodoAction());
      console.log("GOT UNKNOWN DATA STRUCTURE DETAILS:", response);
    }
  } catch(err) {
    yield put(unsetLoadingTodoAction());
    console.log("ERR AT getTodoWorker DETAILS:", err.response);
  }
}
