import axios from 'axios';
import {
  GET_POSTS,
  POSTS_ERRORS,
  SET_LOADING,
  SET_CURRENT,
  ADD_COMMENT,
  GET_COMMENTS,
  ADD_POST,
  CLEAR_POSTS,
  CLEAR_CURRENT
} from './types';

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const getPosts = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(`https://simple-blog-api.crew.red/posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data.reverse()
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERRORS,
      payload: {
        msg: !Object.keys(err).length ? `Could not fetch, received` : err
      }
    });
  }
};

export const getPostsWithComments = id => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(
      `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
    );
    dispatch({
      type: SET_CURRENT,
      payload: res.data
    });
    dispatch({
      type: GET_COMMENTS,
      payload: res.data.comments
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERRORS,
      payload: {
        msg: !Object.keys(err).length ? `Could not fetch, received` : err
      }
    });
  }
};

export const addCommentForPost = data => async dispatch => {
  try {
    setLoading();
    const res = await axios.post(
      'https://simple-blog-api.crew.red/comments',
      data
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERRORS,
      payload: {
        msg: !Object.keys(err).length ? `Could not fetch, received` : err
      }
    });
  }
};

export const addPost = data => async dispatch => {
  try {
    setLoading();
    const res = await axios.post(
      'https://simple-blog-api.crew.red/posts',
      data
    );
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERRORS,
      payload: {
        msg: !Object.keys(err).length ? `Could not fetch, received` : err
      }
    });
  }
};

export const clearPosts = () => async dispatch => {
  dispatch({ type: CLEAR_POSTS })
}

export const clearCurrent = () => async dispatch => {
  dispatch({ type: CLEAR_CURRENT })
}
