import React from 'react'
import salad from '../assets/salad.jpg'
import bruschetta from '../assets/bruschetta.jpg'
import lemon from '../assets/lemon.jpg'
import bike from '../assets/bike.png'
import './specials.css'

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-container">
        <h2>This weeks specials!</h2>

        <button className="online-menu-button">Online Menu</button>
      </div>

      <section className='specials-card-container'>
        <div className='specials-card'>
          <img src={salad} className="specials-img" alt="salad"></img>
          <div>
            <h3>Greek Salad</h3>
            <span className="highlight">$12.99</span>
          </div>
          <div>
            <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>

            <button>Order Delivery <img src={bike} height={20} alt="bike"></img></button>
          </div>
        </div>

        <div className='specials-card'>
          <img src={bruschetta} className="specials-img" alt="bruschetta"></img>
          <div>
            <h3>Bruschetta</h3>
            <span className="highlight">$5.99</span>
          </div>
          <div>
            <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <button>Order Delivery <img src={bike}height={20} alt="bike"></img></button>
          </div>
        </div>

        <div className='specials-card'>
          <img src={lemon} className="specials-img" alt="lemon cake"></img>
          <div>
            <h3>Lemon Dessert</h3>
            <span className="highlight">$5.00</span>
          </div>
          <div>
            <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button>Order Delivery <img src={bike} height={20} alt="bike"></img></button>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Specials