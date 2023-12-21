import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <section className="home-wraper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img src="images/main-banner.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                <div className="main-banner-content position-absolute p-3">
                <h4>Supercharged for pros</h4>
                <h5>headphone</h5>
                <p>from $999 or $44.99/mo</p>
               < Link className='button'>BuY Now</Link>
              </div>
              </div>
             
            </div>
            
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img src="/images/watch.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>Supercharged for pros</h4>
                  <h5>headphone</h5>
                  <p>from $999 or $44.99/mo</p>
                < Link className='button'>BuY Now</Link>
                </div>
                </div>
                
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img src="/images/watch.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>Supercharged for pros</h4>
                  <h5>headphone</h5>
                  <p>from $999 or $44.99/mo</p>
                < Link className='button'>BuY Now</Link>
                </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
