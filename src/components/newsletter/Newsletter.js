import React from 'react'
import productImage from '../assets/product1.png'

function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__wrapper">
        <div className="newsletter__box">
          <div className="newsletter__content">
            <h2>Subscribe To Newsletter</h2>
            <p>Get free guide about smart watches daily.</p>
            <div className="newsletter__form">
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="newsletter__image">
            <img src={productImage} alt="Smartwatch" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
