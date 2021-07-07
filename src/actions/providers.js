import axios from 'axios';
import { GET_POSTS_LIST } from '../actions/types';

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
