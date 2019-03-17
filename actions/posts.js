export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const FETCH_POSTS_LIST = 'FETCH_POSTS_LIST';
export const FETCH_POSTS_LIST_SUCCESS = 'FETCH_POSTS_LIST_SUCCESS';
export const FETCH_POSTS_LIST_ERROR = 'FETCH_POSTS_LIST_ERROR';

export function fetchPost(id, ctx) {
  return {
    type: FETCH_POST,
    id,
    ctx,
  };
}

export function fetchPostSuccess(post) {
  return {
    type: FETCH_POST_SUCCESS,
    post,
  };
}

export function fetchPostError(error) {
  return {
    type: FETCH_POST_ERROR,
    error,
  };
}

export function fetchPostsList(filter, ctx) {
  return {
    type: FETCH_POSTS_LIST,
    filter,
    ctx,
  };
}

export function fetchPostsListSuccess(posts) {
  return {
    type: FETCH_POSTS_LIST_SUCCESS,
    posts,
  };
}

export function fetchPostsListError(error) {
  return {
    type: FETCH_POSTS_LIST_ERROR,
    error,
  };
}
