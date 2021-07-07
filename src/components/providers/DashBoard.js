import React, { Fragment } from 'react';

import PostsList from './ProvidersList';
import PostForm from './ProviderForm';


export default function DashBoard() {
    return (
        <Fragment>
            <PostsList />
            <a href='#/posts'>
              <button className='btn btn-primary'>
              Create Post
              </button>
            </a>

        </Fragment>
    )
}
