import React from 'react'
import './Product_details.css'

const Product_details = () => {
  return (
    <div className="wrapper">
      <div className="product_details">
          <div className="prd_details_wrapper">
              <div className="prd_details_left">
                  Left
              </div>
              <div className="prd_details_right">
                <div className="prd_right_details">
                  <h2>Airpods-Max</h2>
                  <p>a perfect balance of exhilarating high-fidelity and the effortless magic of airpods.</p>
                </div>
                <div className="prd_right_pricing">
                  <h4>$549.00 or 99.99/month</h4>
                  <span>Suggested payments with 6 months special financing</span>
                </div>
                <div className="prd_right_cart">
                  <button>-</button><span>1</span><button>+</button>
                  <span>Only 12 Items Left!</span>
                  <div className="prd_right_cart_buttons">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-outline-primary">Add to Cart</button>
                  </div>
                  <div className="prd_right_cart_addInfo">
                    
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Product_details