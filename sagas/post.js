import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { CLEAR_POSTS_FAILURE, CLEAR_POSTS_REQUEST, CLEAR_POSTS_SUCCESS, CLEAR_POST_FAILURE, CLEAR_POST_REQUEST, CLEAR_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, SEARCH_POSTS_FAILURE, SEARCH_POSTS_REQUEST, SEARCH_POSTS_SUCCESS } from '../reducers/post';

import { contentApiKey } from '../config/config';

const prefix = `/?key=${contentApiKey}`;

function loadPostAPI(id) {
  return axios.get(`/posts/${id}${prefix}&include=tags,authors&file`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data.posts[0],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      err: err.response.data,
    });
  }
}

function loadPostsAPI() {
  return axios.get(`/posts${prefix}&include=tags,authors&file`);
}

function* loadPosts() {
  try {
    const result = yield call(loadPostsAPI);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      err: err.response.data,
    });
  }
}

function* clearPosts() {
  try {
    yield put({
      type: CLEAR_POSTS_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CLEAR_POSTS_FAILURE,
      err: err.response.data,
    });
  }
}

function* clearPost() {
  try {
    yield put({
      type: CLEAR_POST_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CLEAR_POST_FAILURE,
      err: err.response.data,
    });
  }
}

function searchPostsAPI(data) {
  return axios.get(`/posts${prefix}&filter=tag:${data}&include=tags,authors&file`);
}

function* searchPosts(action) {
  try {
    const result = yield call(searchPostsAPI, action.data);
    console.log(result);
    yield put({
      type: SEARCH_POSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_POSTS_FAILURE,
      err: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchClearPost() {
  yield takeLatest(CLEAR_POST_REQUEST, clearPost);
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}

function* watchClearPosts() {
  yield takeLatest(CLEAR_POSTS_REQUEST, clearPosts);
}

function* watchSearchPosts() {
  yield takeLatest(SEARCH_POSTS_REQUEST, searchPosts);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchClearPosts),
    fork(watchClearPost),
    fork(watchSearchPosts),
  ]);
}
