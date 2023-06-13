import React from 'react'
import './Products.css'
import Earbuds from '../../Assets/Img/products/earbuds.png'
import Boat from '../../Assets/Img/products/boat.png'
import Neckband from '../../Assets/Img/products/neckband.png'
import Skull from '../../Assets/Img/products/skull.png'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="products">
        <h3 className="title">Headphone For You!</h3>
        <div className="products-card-deck mt-3">
            <div className="products-card">
                <div className="products-top">
                    <img src={Earbuds} className='img-fluid' alt="product_name" />
                </div>
                <div className="products-bottom">
                    <div className="bottom-left">
                        <h5 className='product-card-title'><Link to='/prd'>Wireless Earbuds, IPX8</Link></h5>
                        <span className='product-card-desc'>Organic Cotton, fairtrade certified</span>
                        <button className='btn btn-outline-primary btn-sm mt-1'>Add to Cart</button>
                    </div>
                    <div className="bottom-right">
                        <span>&#x20B9;450</span>
                    </div>
                </div>
            </div>
            <div className="products-card">
                <div className="products-top">
                    <img src={Boat} className='img-fluid' alt="product_name" />
                </div>
                <div className="products-bottom">
                    <div className="bottom-left">
                        <h5 className='product-card-title'>Boat Rockers 450</h5>
                        <span className='product-card-desc'>Organic Cotton, fairtrade certified</span>
                        <button className='btn btn-outline-primary btn-sm mt-1'>Add to Cart</button>
                    </div>
                    <div className="bottom-right">
                        <span>$450</span>
                    </div>
                </div>
            </div>
            <div className="products-card">
                <div className="products-top">
                    <img src={Neckband} className='img-fluid' alt="product_name" />
                </div>
                <div className="products-bottom">
                    <div className="bottom-left">
                        <h5 className='product-card-title'>Realme wireless neckband</h5>
                        <span className='product-card-desc'>Organic Cotton, fairtrade certified</span>
                        <button className='btn btn-outline-primary btn-sm mt-1'>Add to Cart</button>
                    </div>
                    <div className="bottom-right">
                        <span>$450</span>
                    </div>
                </div>
            </div>
            <div className="products-card">
                <div className="products-top">
                    <img src={Skull} className='img-fluid' alt="product_name" />
                </div>
                <div className="products-bottom">
                    <div className="bottom-left">
                        <h5 className='product-card-title'>Skull Candy 750MA</h5>
                        <span className='product-card-desc'>Organic Cotton, fairtrade certified</span>
                        <button className='btn btn-outline-primary btn-sm mt-1'>Add to Cart</button>
                    </div>
                    <div className="bottom-right">
                        <span>$450</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products