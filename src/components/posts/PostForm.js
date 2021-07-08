import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addPost, getPost, editPost } from '../../actions/posts';

const defaultState = {
    title: '',
    body: '',
    comments: [],
    isEditing: false,
};

class PostForm extends Component {

    constructor(props) {
      super(props);

      this.state = {
        ...defaultState,
        isEditing: this.props.match.params.postId != undefined,
      }

      this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addPost: PropTypes.func.isRequired
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { title, body, comments ,isEditing } = this.state;


        const post = { title, body,  comments };

        if (isEditing) {
          this.props.editPost(this.props.match.params.postId, post);
          this.props.history.push('/');

        } else {
          this.props.addPost(post);
          this.props.history.push('/');
        }
    };

    componentDidMount() {
      if (this.state.isEditing) {
        this.props.getPost(this.props.match.params.postId).then(({ title, body, comments}) => {
          this.setState({
            title,
            body,
            comments
          })
        });
      }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { title, body, comments, isEditing } = this.state;
        const postId = this.props.match.params.postId;

        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>{isEditing ? 'Edit Post' : 'Add Post'}</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            onChange={this.onChange}
                            value={title} />
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
                        <button type='submit' className='btn btn-primary'>
                            {isEditing ? 'Update' : 'Add'}
                        </button>
                        <span> </span>
                        {isEditing && (
                          <a href='#/'>
                            <button className='btn btn-primary'>Cancel</button>
                          </a>
                        )}
                    </div>
                </form>
                {isEditing && (
                  <table className='table table-striped'>
                      <thead>
                          <tr>
                              <th># ID</th>
                              <th>Post ID</th>
                              <th>Body</th>

                          </tr>
                      </thead>
                      <tbody>
                          {comments.map(comment => (
                              <tr key={`comment-row-${comment.id}`}>
                                  <td>{comment.id}</td>
                                  <td>{comment.postId}</td>
                                  <td>{comment.body}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
                )}
            </div>
        )
    }
}

export default connect(null, { addPost, getPost, editPost })(PostForm);
