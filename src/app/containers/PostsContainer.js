import { connect } from 'react-redux';
import { getPosts, clearPosts } from '../actions/blogActions';
import Posts from '../components/Posts';

const mapStateToProps = state => ({
  posts: state.posts.posts,
  loading: state.posts.loading
});

const mapDispatchToProps = {
  getItems: getPosts,
  clear: clearPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);