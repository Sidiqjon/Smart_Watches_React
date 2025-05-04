import React from 'react'

import heroImage from '../assets/hero.png'
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__wrapper">
        <div className="hero__content">
          <h1>Discover Most Suitable Watches</h1>
          <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
          <div className="hero__search">
            <CiSearch />
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
