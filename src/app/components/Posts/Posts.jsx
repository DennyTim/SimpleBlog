import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostsItem';
import Pagination from './Pagination.jsx';
import FormPost from '../../containers/FormPostContainer';
import Spinner from '../Layout/Spinner.jsx';

const Posts = ({ posts, loading, getItems, clear }) => {
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    return () => {
      clear();
    };
  }, []);

  if (loading || posts.length === 0) {
    return <Spinner />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Fragment>
      <div className='container'>
        <h2 className='posts-header'>Posts</h2>
        <button
          onClick={() => {
            setActive(true);
          }}
        >
          Add New Post
        </button>
        {active ? <FormPost active={active} setActive={setActive} /> : <div />}
        <ul className='posts-list'>
          {!loading && posts.length > 0 ? (
            currentPosts.map(post => (
              <PostItem key={post.id} post={post} postLength={100} />
            ))
          ) : (
            <li className='center'>No Logs to show ...</li>
          )}
        </ul>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getItems: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Posts;
