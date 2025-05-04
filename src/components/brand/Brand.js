import React from 'react'

import brand1 from '../assets/apple.png'
import brand2 from '../assets/xiaomi.png'
import brand3 from '../assets/fitbit.png'

function Brand() {
  return (
    <div className="brand">
      <div className="container">
        <div className="brand__card">
          <div className="image">
            <img src={brand1} alt="Brand 1" />
          </div>
          <div className="content">
            <h4 className="brand__name">Apple</h4>
            <p className="description">Apple is one of the most famous smart watches providing company.</p>
          </div>
        </div>
        <div className="brand__card">
          <div className="image">
            <img src={brand2} alt="Brand 2" />
          </div>
          <div className="content">
            <h4 className="brand__name">Xiaomi</h4>
            <p className="description">Xiaomi smart watches are produced by MI company.</p>
          </div>
        </div>
        <div className="brand__card">
          <div className="image">
            <img src={brand3} alt="Brand 3" />
          </div>
          <div className="content">
            <h4 className="brand__name">FitBit</h4>
            <p className="description">FitBit smart watches are best for there health and fitness features.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
