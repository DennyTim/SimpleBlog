import { connect } from 'react-redux';
import { addPost, updatePost } from '../actions/blogActions';
import FormPost from '../components/FormPost';

const mapStateToProps = state => ({
  current: state.posts.current
});

const mapDispatchToProps = {
  addNewPost: addPost,
  update: updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPost);