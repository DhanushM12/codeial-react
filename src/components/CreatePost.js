import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  //to add the data to post when clicked on add post
  handleOnClick = () => {
    //dispatch an action to create a post
    this.props.dispatch(createPost(this.state.content));
    // clear post
    this.setState({
      comment: '',
    });
  };
  //to update the post content
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);
