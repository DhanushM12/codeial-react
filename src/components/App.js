import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList } from './';
//type on rcc to get the class
class App extends React.Component {
  //type only cdm
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    //console.log('PROPS', posts);
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
