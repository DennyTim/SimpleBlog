import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PostItem = ({ post, postLength = post.body.length }) => {
  return (
    <div className='post-item'>
      <img
        className='post-item-img'
        src='//www.gravatar.com/avatar/0dcc7d49493b931c241e1433d432087a?s=200&r=pg&d=mm'
        alt='userimg'
      />
      <div className='post-item-info'>
        <Link className='post-item-link' to={`/post/${post.id}`}>
          <h3 className='post-item-header'>{post.title}</h3>
        </Link>
        <p className='post-item-description'>
          {`${post.body.substring(
            0,
            postLength < post.body.length ? postLength : post.body.length
          )}...`}
        </p>
        <div className='post-item-btns'>
          <button className='post-item-btn btn-light'>Edit Post</button>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object
};

export default PostItem;
