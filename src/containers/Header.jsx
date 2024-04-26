import React from 'react';
import logo from '../assets/Asset 9@4x.png';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header () {

  return (
    <header>
      <div className="content-wrapper">
        <div className="header-logo">
          <img src={logo}  width={20}  alt="Little Lemon Logo"/>
        </div>
        <nav className="navbar">
          <li><NavLink to='/menu' className='nav-item'>Menu</NavLink></li>
          <li><NavLink to='/about' className='nav-item'>About</NavLink></li>
          <li><NavLink to='/booking-page' className='nav-item'>Reservations</NavLink></li>
        </nav>
      </div>
    </header>
  )

}

export default Header;