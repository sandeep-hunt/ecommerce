import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Categories from '../../Components/Categories/Categories'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Banner/>
      <Categories/>
    </div>
  )
}

export default Homepage