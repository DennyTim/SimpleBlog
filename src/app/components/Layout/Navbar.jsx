import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <h2 className='navbar-header'>Simple Blog</h2>
      <ul className='navbar-list'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/posts'>Lasts Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
