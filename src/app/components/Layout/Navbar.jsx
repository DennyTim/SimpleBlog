import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <Link to='/'>
        <h2 className='navbar-header'>Simple Blog</h2>
      </Link>
      <ul className='navbar-list'>
        <li>
          <NavLink exact to='/' activeClassName={'wfm-active'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/posts' activeClassName={'wfm-active'}>
            Lasts Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
