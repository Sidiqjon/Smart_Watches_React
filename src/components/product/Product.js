import React from 'react'

import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="title">
          <p>Find your favourite smart watch.</p>
          <h3>Our Latest Products</h3>
        </div>
        <div className="product__cards">
          <div className="product__card">
            <div className="product__image">
              <img src={product1} alt="Product 1" />
            </div>
            <h4>Apple Smart I</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
              <span className="old-price">$300.00</span>
              <span className="new-price">$255.00</span>
            </div>
          </div>
          <div className="product__card">
            <div className="product__image">
              <img src={product2} alt="Product 2" />
            </div>
            <h4>Apple Smart II</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
              <span className="old-price">$300.00</span>
              <span className="new-price">$255.00</span>
            </div>
          </div>
          <div className="product__card">
            <div className="product__image">
              <img src={product3} alt="Product 3" />
            </div>
            <h4>Apple Smart III</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
            <span className="old-price">$300.00</span>
            <span className="new-price">$255.00</span>
            </div>
          </div>
          <div className="product__card">
            <div className="product__image">
              <img src={product4} alt="Product 4" />
            </div>
            <h4>Apple Smart IV</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
              <span className="old-price">$450.00</span>
              <span className="new-price">$399.00</span>
            </div>
          </div>
          <div className="product__card">
            <div className="product__image">
              <img src={product5} alt="Product 4" />
            </div>
            <h4>Samsung Watch Pro</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
            <span className="old-price">$300.00</span>
            <span className="new-price">$255.00</span>
            </div>
          </div>
          <div className="product__card">
            <div className="product__image">
              <img src={product6} alt="Product 4" />
            </div>
            <h4>Fitbit Max 1</h4>
            <p className="product__rating">★★★★★</p>
            <div className="product__price">
              <span className="new-price">$155.00</span>
            </div>
          </div>
        </div>
        <div className="product__button">
          <a href="#" className="btn">View More</a>
        </div>
      </div>
    </div>
  )
}

export default Product
