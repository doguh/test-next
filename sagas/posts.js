import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_POST, fetchPostSuccess, fetchPostError } from '../actions/posts';
import fetch from 'isomorphic-unfetch';

function* doFetchPost(action) {
  //   yield new Promise(resolve => setTimeout(resolve, 1000));
  const res = yield fetch(`http://localhost:3000/api/posts/${action.id}`);
  if (res.ok) {
    const post = yield res.json();
    yield put(fetchPostSuccess(post));
  } else {
    yield put(fetchPostError({ code: res.code, message: res.body }));
  }
}

export default function* authSaga() {
  yield takeLatest(FETCH_POST, doFetchPost);
}
