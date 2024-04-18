import React from 'react';
import logo from '../assets/Asset 16@4x.png';
import Navbar from './Navbar.jsx';
import './header.css';

function Header () {

    return (
        <header>
            <div className='header-logo'>
                <img src={logo}  width={200} height={53} alt="Little Lemon Logo"/>
            </div>
            <Navbar />
        </header>
    )

}

export default Header;