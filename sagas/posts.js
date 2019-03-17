import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_POST, fetchPostSuccess, fetchPostError } from '../actions/posts';
import fetch from 'isomorphic-unfetch';

function* doFetchPost({ id, ctx }) {
  const res = yield fetch(`http://localhost:3000/api/posts/${id}`);
  if (res.ok) {
    const post = yield res.json();
    yield put(fetchPostSuccess(post));
  } else {
    const message = yield res.text();
    const code = res.status;
    if (ctx.isServer) {
      ctx.res.statusCode = code;
    }
    yield put(fetchPostError({ code, message }));
  }
}

export default function* authSaga() {
  yield takeLatest(FETCH_POST, doFetchPost);
}
