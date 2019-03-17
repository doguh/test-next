import { takeLatest, put } from 'redux-saga/effects';
import {
  FETCH_POST,
  fetchPostSuccess,
  fetchPostError,
  FETCH_POSTS_LIST,
  fetchPostsListSuccess,
  fetchPostsListError,
} from '../actions/posts';
import Api from '../lib/api';

function* doFetchPost({ id, ctx }) {
  const r = yield Api.get(`posts/${id}`)
    .then(json => {
      return put(fetchPostSuccess(json));
    })
    .catch(({ status, message }) => {
      if (ctx.isServer) {
        ctx.res.statusCode = status;
      }
      return put(fetchPostError({ status, message }));
    });
  yield r;
}

function* doFetchPostsList({ filter, ctx }) {
  const r = yield Api.get('posts')
    .then(json => {
      return put(fetchPostsListSuccess(json));
    })
    .catch(({ status, message }) => {
      if (ctx.isServer) {
        ctx.res.statusCode = status;
      }
      return put(fetchPostsListError({ status, message }));
    });
  yield r;
}

export default function* authSaga() {
  yield takeLatest(FETCH_POST, doFetchPost);
  yield takeLatest(FETCH_POSTS_LIST, doFetchPostsList);
}
