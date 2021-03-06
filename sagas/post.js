/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { CLEAR_POSTS_FAILURE, CLEAR_POSTS_REQUEST, CLEAR_POSTS_SUCCESS, CLEAR_POST_FAILURE, CLEAR_POST_REQUEST, CLEAR_POST_SUCCESS, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, SEARCH_POSTS_FAILURE, SEARCH_POSTS_REQUEST, SEARCH_POSTS_SUCCESS } from '../reducers/post';

const { CONTENT_API_KEY } = process.env;

const prefix = `/?key=${CONTENT_API_KEY}`;

function loadPostAPI(id) {
  return axios.get(`/posts/${id}${prefix}&include=tags,authors&file`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);

    const { html } = result.data.posts[0];
    const codeblock = html.split('<pre><code>');
    let newblock = [];
    codeblock.map((v) => {
      if (codeblock.length === 1) {
        newblock.push(v);
      }
      if (codeblock.length > 1) {
        const current = v.split('</code></pre>');
        newblock = [...newblock, ...current];
      }
    });

    yield put({
      type: LOAD_POST_SUCCESS,
      data: {
        content: result.data.posts[0],
        codeblock: newblock,
      },

    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      err: err.response.data,
    });
  }
}

// function loadCommentsAPI() {
//   return axios.get('https://api.github.com/repos/limprove/next-ghost-blog-app/issues');
// }

function loadPostsAPI() {
  return axios.get(`/posts${prefix}&include=tags,authors&file`);
}

function* loadPosts() {
  try {
    const result = yield call(loadPostsAPI);
    // const commentResult = yield call(loadCommentsAPI);
    // const { data } = commentResult;

    // const dataObj = data.map((v) => {
    //   const { title, comments } = v;
    //   const newTitle = title.split('/');
    //   const titleId = newTitle[1];
    //   return {
    //     ...dataObj,
    //     [titleId]: comments,
    //   };
    // });

    // const postsArr = result.data.posts;

    // dataObj =
    // [
    //   {5ffbfceb9bf5c2001ec218a8: 1},
    //   {5ffe82b187fd6d001ea209be: 0},
    //   {5ffe81fe87fd6d001ea209b5: 2}
    // ]

    // const newArr = postsArr.map((v) => {
    //   // eslint-disable-next-line guard-for-in
    //   const newDataObj = dataObj.map((val) => {
    //     const key = Object.keys(val)[0];
    //     const value = Object.values(val)[0];
    //     if (v.id === key) {
    //       const curObj = { comments_length: value };
    //       console.log(curObj);
    //       const returnObj = Object.assign(v, curObj);
    //       return returnObj;
    //     }
    //     const curObj = { comments_length: 0 };
    //     const returnObj = Object.assign(v, curObj);
    //     return returnObj;
    //   });
    //   console.log(newDataObj);
    // });

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
