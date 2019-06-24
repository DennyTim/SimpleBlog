import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className='main-page'>
      <div className='blur-image'>
        <h1 className='main-header'>Get started</h1>
        <Link className='main-btn btn-success' to='/posts'>
          Show posts
        </Link>
      </div>
    </main>
  );
};

export default Home;
