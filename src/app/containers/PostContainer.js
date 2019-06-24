import { connect } from 'react-redux';
import {
  getPostsWithComments,
  addCommentForPost,
  clearCurrent
} from '../actions/blogActions';
import Post from '../components/Post';

const mapStateToProps = state => ({
  current: state.posts.current,
  comments: state.posts.comments,
  loading: state.posts.loading
});

const mapDispatchToProps = {
  getFullInfo: getPostsWithComments,
  addComment: addCommentForPost,
  clear: clearCurrent
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
