import {all} from 'redux-saga/effects';
import { getTodoWatcher } from './watcher/todoWatcher';

export default function* rootSaga(){
  yield all([
    getTodoWatcher()
  ])
}