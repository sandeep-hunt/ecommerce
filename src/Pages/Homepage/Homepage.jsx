import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="wrapper">
      <Banner/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Homepage