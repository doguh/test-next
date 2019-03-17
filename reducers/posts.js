import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POSTS_LIST,
  FETCH_POSTS_LIST_SUCCESS,
  FETCH_POSTS_LIST_ERROR,
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
    case FETCH_POSTS_LIST:
      return {
        ...state,
        list: null,
        fetchingList: true,
        fetchListError: null,
      };
    case FETCH_POSTS_LIST_SUCCESS:
      return {
        ...state,
        list: action.posts,
        fetchingList: false,
        fetchListError: null,
      };
    case FETCH_POSTS_LIST_ERROR:
      return {
        ...state,
        list: null,
        fetchingList: false,
        fetchListError: action.error,
      };
    default:
      return state;
  }
}
