import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
        <div className="banner-wrapper">
            <div className="banner-content">
                <h1 className='banner-title'>Shopping and Department Store.</h1>
                <p>Shopping is a bit of relaxing hobby for me, which is something troubling for the bank balance.</p>
                <button className='btn btn-primary mt-2'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Banner