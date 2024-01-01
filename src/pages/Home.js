import React from 'react'
import { Link } from 'react-router-dom'
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuGift, LuBadgePercent  } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import Marquee from "react-fast-marquee"
import { BlogCard } from '../components/BlogCard';
import { ProductCard } from '../components/ProductCard';
import { SpecialProduct } from '../components/SpecialProduct';



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
              <div className="categories d-flex justify-content-between flex-wrap aligh-items-center">
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>IPad-pro with Pen</h6>
                      <p>5 Items</p>
                    </div>
                    <img src="images/products/tablet.png" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Phone with Airpod</h6>
                      <p>2 Items</p>
                    </div>
                    <img src="images/phone.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Apple Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/AppleWatch.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Iphone Pro Max</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/Iphone.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Laptop Mac</h6>
                      <p>6 Items</p>
                    </div>
                    <img src="images/products/laptop.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Game Console</h6>
                      <p>3 Items</p>
                    </div>
                    <img src="images/products/game.png" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Iphone Pro Max 14</h6>
                      <p>4 Items</p>
                    </div>
                    <img src="images/Iphone14.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div>
                      <h6>Airpod Max </h6>
                      <p>4 Items</p>
                    </div>
                    <img src="images/airpodd.webp" alt=" apple watch" height={120} width={120}/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Collection */}
       <div className="featured-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Feautured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

          </div>
        </div>
      </div>
      {/* Special Produc */}
      <section className="special-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>

          <div className="row">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>

          </div>
        </div>
      </section>
      {/* famous Produc */}
      <section className="famous-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className='row'>
            <div className="col-3">
              <div className="famous-card bg-dark position-relative d-flex py-5">
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $299 or $16/mo. for 24 mo.*</p>
                </div>
                <img src="images/fueatured/applee.png" alt="watch img" className='img-fluid py-5'  />

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white position-relative d-flex py-5">
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Bluetooth Headphone</h6>
                  <p className='text-dark'>From $199 or $16/mo. for 24 mo.*</p>
                </div>
                <img src="images/fueatured/headphone (2).webp" alt="watch img" className='img-fluid py-5'  />

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white position-relative d-flex py-5">
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Iphone 14 Pro Max</h6>
                  <p className='text-dark'>From $399 or $16/mo. for 24 mo.*</p>
                </div>
                <img src="images/Iphone.webp" alt="watch img" className='img-fluid py-5'  />

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-white position-relative d-flex py-5">
                <div className="famous-content position-absolute">
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $299 or $16/mo. for 24 mo.*</p>
                </div>
                <img src="images/watch2.webp" alt="watch img" className='img-fluid py-5'  />

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marquee */}
      <section className="marque-wrapp py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex '>
                  <div className='mx-6 '><img src="images/logo/brand 0.jpg" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/brand 1.png" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/brand 2.png" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/brand 3.png" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/brand 4.jpg" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/canon.png" alt="brand" className='brand'/></div>
                  <div className='mx-4 '><img src="images/logo/hp.png" alt="brand" className='brand'/></div>



              </Marquee>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog */}
      <div className="blog-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </div>

    </>
  )
}
