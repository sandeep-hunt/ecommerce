import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './Product_details.css'
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Headphone from '../../Assets/Img/products/prd_details.png'
import Relame from '../../Assets/Img/products/neckband.png'
import Earbuds from '../../Assets/Img/products/earbuds.png'
import Relame_details from '../../Assets/Img/products/neckband_details.png'
import Earbuds_details from '../../Assets/Img/products/earbuds_details.png'

const Product_details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="wrapper">
      <div className="product_details">
        <div className="prd_details_wrapper">
            <div className="prd_details_left">
              <Swiper
                spaceBetween={10}
                navigation={false}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper">
                <SwiperSlide>
                  <img src={Headphone} className='img-fluid' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Relame_details} className='img-fluid' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Earbuds_details} className='img-fluid' alt="" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper">
                <SwiperSlide>
                  <img src={Headphone} className='img-fluid' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Relame} className='img-fluid' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Earbuds} className='img-fluid' alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="prd_details_right">
              <div className="prd_right_details">
                <h2 className='prd-title'>Airpods-Max</h2>
                <p className='prd-desc'>a perfect balance of exhilarating high-fidelity and the effortless magic of airpods.</p>
              </div>
              <div className="prd_right_pricing">
                <h4 className='prd-price'>$549.00 or 99.99/month</h4>
                <span className='prd-desc'>Suggested payments with 6 months special financing</span>
              </div>
              <div className="prd_right_cart">
                <div className="prd_qty">
                  <div className="prd_qty_counter">
                    <button className='prd_qty_minus'>-</button><span className='prd_qty_count'>1</span><button className='prd_qty_plus'>+</button>
                  </div>
                  <span>Only 12 Items Left!</span>
                </div>
                <div className="prd_right_cart_buttons">
                  <button className="btn btn-primary mr-2">Buy Now</button>
                  <button className="btn btn-outline-primary">Add to Cart</button>
                </div>
                <div className="prd_right_cart_addInfo">
                  <div className="prd_details_card">
                    <h5 className='prd_card_title'>Free Delivery</h5>
                    <p className='prd_card_desc'>Enter your poastal code for delivery availability</p>
                  </div>
                  <div className="prd_details_card">
                    <h5 className='prd_card_title'>Return Delivery</h5>
                    <p className='prd_card_desc'>Free 30days delivery returns</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product_details