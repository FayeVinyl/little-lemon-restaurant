import React from 'react';
import logo from '../assets/Asset 9@4x.png';
import Navbar from './Navbar.jsx';
import './header.css';

function Header () {

    return (
        <header>
            <div className='header-logo'>
                <img src={logo}  width={15}  alt="Little Lemon Logo"/>
            </div>
            <Navbar />
        </header>
    )

}

export default Header;