import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addComment } from '../../actions/posts';

class CommentForm extends Component {

    state = {
        postId: 0,
        body: ''
    };

    static propTypes = {
        addComment: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { postId, body} = this.state;


        const comment =  { postId, body };
        console.log(comment);
        this.props.addComment(comment);

        this.props.history.push('/');

    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { postId, body } = this.state;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add comment</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Post Id</label>
                        <input
                            type='number'
                            className='form-control'
                            name='postId'
                            onChange={this.onChange}
                            value={postId} />
                    </div>
                    <div className='form-group'>
                        <label>Body</label>
                        <input
                            type='text'
                            className='form-control'
                            name='body'
                            onChange={this.onChange}
                            value={body} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm);
