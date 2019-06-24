import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getPostsWithComments,
  addCommentForPost,
  clearCurrent
} from '../../actions/blogActions';
import PostItem from '../PostsItem';
import Spinner from '../Layout/Spinner.jsx';
import CommentsItem from '../CommentsItem';
import FormComment from '../FormComment';
import FormPost from '../FormPost';

const Post = ({
  current,
  comments,
  loading,
  getFullInfo,
  addComment,
  clear,
  match
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    getFullInfo(match.params.id);
  }, []);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  if (loading || current === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className='container'>
        <PostItem post={current} />
        <button
          className='post-item-btn btn-light'
          onClick={() => {
            setActive(true);
          }}
        >
          Edit Post
        </button>
        {active ? <FormPost active={active} setActive={setActive} /> : <div />}
        <FormComment addComment={addComment} id={current.id} />
        <ul>
          {comments.length > 0 ? (
            comments
              .reverse()
              .map(item => <CommentsItem key={item.id} comment={item} />)
          ) : (
            <h3 className='post-header'>No comments yet</h3>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getFullInfo: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  current: PropTypes.object,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  current: state.posts.current,
  comments: state.posts.comments,
  loading: state.posts.loading
});

export default connect(
  mapStateToProps,
  {
    getFullInfo: getPostsWithComments,
    addComment: addCommentForPost,
    clear: clearCurrent
  }
)(Post);
