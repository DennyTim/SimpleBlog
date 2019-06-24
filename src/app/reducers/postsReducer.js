import {
  GET_POSTS,
  POSTS_ERRORS,
  SET_LOADING,
  SET_CURRENT,
  GET_COMMENTS,
  ADD_COMMENT,
  ADD_POST,
  CLEAR_CURRENT,
  CLEAR_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  current: null,
  comments: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false
      }
    case POSTS_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading: false
      }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        comments: [],
        loading: false
      }
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        loading: false
      }
    default:
      return state;
  }
}