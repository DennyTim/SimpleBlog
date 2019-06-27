import React from 'react';
import Radium from 'radium'; // позволяет инлайн стилям добавлять псевдоклассы и псевдоэлементы
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../../css/test-module.css'; // использование модульной системы

const PostItem = ({ post, postLength = post.body.length }) => {
  const style = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14 )',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      cursor: 'pointer'
    }
  };

  // Check for ErrorBoundary
  // if (Math.random() > 0.7) {
  //   throw new Error('Error');
  // }

  return (
    <div className={styles.postItem} style={style}>
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
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
  postLength: PropTypes.number
};

export default Radium(PostItem);
