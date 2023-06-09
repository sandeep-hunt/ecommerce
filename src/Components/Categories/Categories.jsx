import React from 'react'
import './Categories.css'
import Furniture from '../../Assets/Img/furniture.jpg'
import Book from '../../Assets/Img/book.jpg'
import Sneakers from '../../Assets/Img/sneakers.jpg'
import Travel from '../../Assets/Img/travel.jpg'

const Categories = () => {
  return (
    <div className="categories">
      <h3 className='title'>Shop Our Top Categories</h3>
        <div className="card-deck mt-3">
          <div className="card" style={{background: `url(${Furniture})`}}>
              <h4>Furniture</h4>
          </div>
          <div className="card" style={{background: `url(${Book})`}}>
              <h4>Books</h4>
          </div>
          <div className="card" style={{background: `url(${Sneakers})`}}>
              <h4>Sneakers</h4>
          </div>
          <div className="card" style={{background: `url(${Travel})`}}>
              <h4>Travel</h4>
          </div>
          <div className="card" style={{background: `url(${Book})`}}>
              <h4>Books</h4>
          </div>
          <div className="card" style={{background: `url(${Sneakers})`}}>
              <h4>Sneakers</h4>
          </div>
        </div>
    </div>
  )
}

export default Categories