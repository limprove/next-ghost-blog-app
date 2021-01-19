import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import userSaga from './user';
import postSaga from './post';

const { BLOG_URL } = process.env;

axios.defaults.baseURL = `${BLOG_URL}/ghost/api/v3/content`;

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(postSaga),
  ]);
}
