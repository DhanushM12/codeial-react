import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

//type on rcc to get the class
class App extends React.Component {
  //type only cdm
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('PROPS', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
