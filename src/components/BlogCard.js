import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
          <div className='card-image'>
            <img src="images/Blogs/blog1.jpg" alt="Blog" className='img-fluid'/>
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2023</p>
            <h5 className="title">Best Experince with us</h5>
            <p className="des">Lorem ipsum dolor sit amet consectetur .</p>
            <Link to="/" className='button'>Read More</Link>
          </div>
        </div>
    </div>
  )
}
 