import React from 'react';
import './chicago.css';
import MarioandAdrian from '../assets/Mario and Adrian.jpg';
import restaurant from '../assets/restaurant.jpg';

const Chicago = () => {
  return (
    <section className='chicago-backstory'>
      <div className='backstory'>
        <h2>Little Lemon</h2>
        <h2>Chicago</h2>

        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </div>
    <div className='backstory-photos'>
      <img src={MarioandAdrian} className="image-stack-top"  alt="Mario and Adrian"></img>
      <img src={restaurant} className="image-stack-bottom" alt="inside the Little Lemon restaurant"></img>
    </div>
    </section>
  )
}

export default Chicago