import React, { Fragment } from 'react';

import PostsList from './PostsList';
import PostForm from './PostForm';


export default function DashBoard() {
    return (
        <Fragment>
            <PostsList />
            <a href='#/posts'>
              <button className='btn btn-primary'>
              Create Post
              </button>
            </a>
            <span> </span>
            <a href='#/comments'>
              <button className='btn btn-primary'>
              Leave a comment
              </button>
            </a>
        </Fragment>
    )
}
