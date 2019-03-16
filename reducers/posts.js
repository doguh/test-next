import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from '../actions/posts';

export default function auth(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        post: null,
        fetchingPost: true,
        fetchPostError: null,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        post: action.post,
        fetchingPost: false,
        fetchPostError: null,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        post: null,
        fetchingPost: false,
        fetchPostError: action.error,
      };
    default:
      return state;
  }
}
