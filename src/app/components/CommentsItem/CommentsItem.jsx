import React from 'react';
import PropTypes from 'prop-types';

const CommentsItem = ({ comment }) => {
  return (
    <li className='comments-item'>
      <img
        className='comments-item-user'
        src='//www.gravatar.com/avatar/0dcc7d49493b931c241e1433d432087a?s=200&r=pg&d=mm'
        alt='userimg'
      />
      <div className='comments-item-body'>{comment.body}</div>
    </li>
  );
};

CommentsItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentsItem;
