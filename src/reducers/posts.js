import {  GET_POSTS_LIST, ADD_POST, GET_POST, UPDATE_POST, DELETE_POST, ADD_COMMENT } from '../actions/types';

const initialState = {
    posts: [],
    comments: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_LIST:
            return {
                ...state,
                posts: action.payload
            };
        case DELETE_POST:
                return {
                    ...state,
                    posts: state.posts.filter(post => post.id != action.payload)
                };
        case ADD_POST:
            return {
                  ...state,
                  posts: [...state.posts, action.payload]
            };
        case GET_POST:
        case UPDATE_POST:
            return {
                  ...state,
                  [action.payload.id]: action.payload
            };
        case ADD_COMMENT:
            return {
                    ...state,
                    comments: [...state.comments, action.payload]
            };

        default:
            return state;
    }
};
