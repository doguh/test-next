import { takeLatest, put } from 'redux-saga/effects';
import { FETCH_POST, fetchPostSuccess, fetchPostError } from '../actions/posts';
import Api from '../lib/api';

function* doFetchPost({ id, ctx }) {
  const r = yield Api.get(`/posts/${id}`)
    .then(json => {
      return put(fetchPostSuccess(json));
    })
    .catch(({ status, message }) => {
      console.log('err', { status, message });
      if (ctx.isServer) {
        ctx.res.statusCode = status;
      }
      return put(fetchPostError({ status, message }));
    });
  yield r;
}

export default function* authSaga() {
  yield takeLatest(FETCH_POST, doFetchPost);
}
