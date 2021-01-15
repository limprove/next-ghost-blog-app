import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { blogUrl } from '../config/config';

import userSaga from './user';
import postSaga from './post';

axios.defaults.baseURL = `${blogUrl}/ghost/api/v3/content`;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}
