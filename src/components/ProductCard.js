import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import { MdFavoriteBorder,MdOutlineRemoveRedEye  } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaArrowsRotate } from "react-icons/fa6";



export const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="#" ><MdFavoriteBorder className='icon' /></Link>
          </div>
            <div className="product-image">
                <img src="images/fueatured/airpods.webp" alt="product img" className='img-fluid'/>
                <img src="images/fueatured/airpods2.webp" alt="product img" className='img-fluid'/>

            </div>
            <div className="product-details">
              <h6 className='brand'>Headphone</h6>
              <h5 className='Product-title'>
                Bluetooth Wood Stuck Electronic HeadPhone
              </h5>
              <ReactStars
               count={5} 
               size={24} 
               value='3' 
               edit={false} 
               activeColor='#ffd700'
               />
              <p className="price">
              $100.00
              </p>

            </div>
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <FaArrowsRotate className='icon'/>
                </Link>
                <Link>
                  <MdOutlineRemoveRedEye className='icon'/>
                </Link>
                <Link>
                  <HiOutlineShoppingBag className='icon'/>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}
