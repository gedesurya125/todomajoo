import {takeLatest} from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { getTodoWorker } from '../worker/todoWorker';

export function* getTodoWatcher() {
  yield takeLatest(type.GET_TODO, getTodoWorker);
}