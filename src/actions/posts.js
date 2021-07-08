import axios from 'axios';
import { GET_POSTS_LIST, ADD_POST, GET_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get posts list
export const getPosts = () => (dispatch, getState) => {
    return axios.get('/posts')
        .then(result => {
            dispatch({
                type: GET_POSTS_LIST,
                payload: result.data.sort((a, b) => a.id - b.id)
            });
        }).catch(error => console.log(error));
};
//Add post
export const addPost = (post) => (dispatch, getState) => {
    axios.post('/posts', post)
        .then(result => {
            dispatch({
                type: ADD_POST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Get post
export const getPost = id => (dispatch, getState) => {
    return axios.get(`/posts/${id}?_embed=comments`).then(
        ({ data }) => data
      ).catch(error => console.log(error));
};

// Update post
export const editPost = (id, formValues) => (dispatch, getState) => {

  axios.patch(`/posts/${id}`, formValues)
  .then(result => {
      dispatch({
        type: UPDATE_POST,
        payload: result.data
      });
    }).catch(error => console.log(error));

};

export const deletePost = (id) => (dispatch, getState) => {
    axios.delete(`posts/${id}`)
        .then(result => {
            dispatch({
                type: DELETE_POST,
                payload: id
            });
        }).catch(error => console.log(error));
};

// Add comment
export const addComment = (comment) => (dispatch, getState) => {
    axios.post('/comments', comment)
        .then(result => {
            dispatch({
                type: ADD_COMMENT,
                payload: result.data
            });
        }).catch(error => console.log(error));
};
