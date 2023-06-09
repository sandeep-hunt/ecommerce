import React from 'react'
import logo from '../../Assets/Img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="infobar">
        <div className="infobar-left">
          <span>+001234567890</span>
        </div>
        <div className="infobar-middle">
          <span>Get 50% off on Selected items | Shop Now</span>
        </div>
        <div className="infobar-right">
          <span><span>Eng</span><span>Location</span></span>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#"><img src={logo} className='img-fluid' alt="logo" /></a>
        </div>
        <ul className="navbar-nav me-auto ml-4">
          <li className="nav-item">Categories</li>
          <li className="nav-item">Deals</li>
          <li className="nav-item">What's New</li>
          <li className="nav-item">Delivery</li>
        </ul>
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li className="nav-item">Account</li>
            <li className="nav-item">Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header