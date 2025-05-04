import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Product from './components/product/Product'
import AboutUs from './components/aboutus/Aboutus'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
        <Header/>
        <Hero/>
        <Brand />
        <Product />
        <AboutUs />
        <Newsletter />
        <Footer/>
    </>
  );
}

export default App;
