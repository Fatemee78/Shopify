import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuGift, LuBadgePercent  } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";



export const Home = () => {
  return (
    <>
      {/* section 1 */}
      <section className="home-wraper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
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
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="/images/watch.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>New Smart</h4>
                  <h5>Apple Watch</h5>
                  <p> from $100 <br/>or $150/mo</p>
                </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="/images/Headphone.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>Best Sale</h4>
                  <h5>headphone</h5>
                  <p>from $999 <br /> or $44.99/mo</p>
                </div>
                </div>
                <div className="small-banner position-relative ">
                  <img src="/images/Iphone.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>Arrival Here</h4>
                  <h5>Iphone Pro</h5>
                  <p>from $200 <br /> or $44.99/mo</p>
                </div>
                </div>
                
                <div className="small-banner position-relative ">
                  <img src="/images/laptop1.jpg" alt="main-banner" className="img-fluid rounded-3"/>
                  <div className="small-banner-content position-absolute p-3">
                  <h4>Best/Sales</h4>
                  <h5>Mac pro</h5>
                  <p>from $999 <br /> or $44.99/mo</p>
                </div>
                </div>
                
              </div>
        
             
            </div>
          </div>
        </div>
      </section>
      {/* setion 2 */}
      <section className="home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <LiaShippingFastSolid size={32}/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0"> From all orders over $50</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <LuGift size={32} />
                  <div>
                    <h6>Daily Surprise offer</h6>
                    <p className="mb-0"> Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <TfiHeadphoneAlt size={32} />
                  <div>
                    <h6>Support 8/24</h6>
                    <p className="mb-0">Shop with exspert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <LuBadgePercent size={32}/>
                  <div>
                    <h6>Afordable Prices</h6>
                    <p className="mb-0">Get Factory Default Prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <MdOutlinePayment size={32}/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Category */}
      <section className="home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between aligh-items-center">
                  <div>
                    <div>
                      <h6>Apple Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/Airpot.jpg" alt=" aplle watch" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
