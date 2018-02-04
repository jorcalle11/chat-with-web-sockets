import { takeEvery } from 'redux-saga/effects';
import * as types from './types';

export default function* rootSaga({ socket, username }) {
  yield takeEvery(types.ADD_MESSAGE, action => {
    socket.send(JSON.stringify(action));
  });
}
