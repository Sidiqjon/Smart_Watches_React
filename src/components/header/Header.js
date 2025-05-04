import React from 'react'

import logo from '../assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <div className="container header__navbar">
        <img src={logo} alt="Logo" />
        <ul className="header__collection">
          <li>Home</li>
          <li>Brands</li>
          <li>Products</li>
          <li>About</li>
          <li>Newsletter</li>
        </ul>
        <div className="header__options">
          <CiSearch />
          <FaRegUser />
          <FiShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Header
