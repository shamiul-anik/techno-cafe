import React from 'react';
import './Navbar.css';
import User from '../../assets/user.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div><a className="navbar-brand" href="#">Techno Cafe</a></div>
      <div className="user-img-container">
        {/* <ul className="nav-list">
          <li className="nav-item">
            <a href="/order">Blogs</a>
          </li>
          <li className="nav-item">
            <a href="/review">Bookmark</a>
          </li>
          <li className="nav-item">
            <a href="/inventory">Blog</a>
          </li>
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
        </ul> */}
        <img src={User} alt="User" className="user-img" />
      </div>
    </nav>
  );
};

export default Navbar;