export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    id,
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
