import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (

        <nav className="navbar">
                <ul>
                    <li><NavLink to='/' className='nav-item'>Home</NavLink></li>
                    <li><NavLink to='/about' className='nav-item'>About</NavLink></li>
                    <li><NavLink to='/menu' className='nav-item'>Menu</NavLink></li>
                    <li><NavLink to='/booking-page' className='nav-item'>Reservations</NavLink></li>
                </ul>
        </nav>

    )

}

export default Navbar;