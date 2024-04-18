import React from 'react'
import waiter from '../assets/waiter.jpg'
import { NavLink } from 'react-router-dom';
import './calltoaction.css'

const CallToAction = () => {
  return (
    <section className="hero-section-container" >
      <div className="hero-section">
        <span>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are  family owned Mediterranean restaurant focused on traditional recipes served with a moden twist</p>
        </span>
        <NavLink to='/booking-page' className='nav-item'>
          <button className="reserve-button">Reserve a table</button>
        </NavLink>

      </div>


      <div>
        <img src={waiter} className="hero-image" alt="A waiter holding a tray of appetizers"></img>
      </div>
    </section>
  )
}

export default CallToAction