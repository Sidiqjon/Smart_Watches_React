import React from 'react'
import hamzaImg from '../assets/Hamza.png';
import hafizImg from '../assets/Hafiz.png';

function AboutUs() {
  return (
    <section className="aboutus" id="aboutus">
      <div className="container aboutus__wrapper">
        <div className="title">
          <p><a href="#">Here are our some of the best clients.</a></p>
          <h3>What People Say About Us</h3>
        </div>
        <div className="aboutus__cards">
          <div className="aboutus__card">
            <div className="aboutus__image">
              <img src={hamzaImg} alt="Hamza Faizi" />
            </div>
            <div className="aboutus__content">
              <h4>Hamza Faizi</h4>
              <p>Don’t waste time, just order! This is the best website to purchase smart watches.</p>
              <div className="aboutus__rating">★★★★★</div>
            </div>
          </div>

          <div className="aboutus__card">
            <div className="aboutus__image">
              <img src={hafizImg} alt="Hafiz Huzaifa" />
            </div>
            <div className="aboutus__content">
              <h4>Hafiz Huzaifa</h4>
              <p>I’ve been purchasing smart watches of Mohid for a long time. All the products are of good quality.</p>
              <div className="aboutus__rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
