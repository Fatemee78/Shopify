import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import { Meta } from '../components/Meta'
import ReactStars from 'react-rating-stars-component'


export const OurStore = () => {
  return (
    <>
    <Meta title={"Our Store"} />
    <BreadCrumb title="Our Store" />
    
    <div className="store-wrapper home-wraper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Shop By Categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Accessories</li>
                                <li>Tablet</li>
                                <li>Mobile</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Filter By</h3>
                        <div>
                            <h5 className="sub-title">Availablity</h5>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" name="" id="" />
                                    <lable className="form-check-lable">In Stok (1)</lable>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" name="" id="" />
                                    <lable className="form-check-lable">Out of Stock </lable>
                                </div>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div className="form-floating mb-3">
                                    <input type="text"  className='form-control' placeholder='From'/>
                                    <label htmlFor="FloatingInput">From</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text"  className='form-control' placeholder='To'/>
                                    <label htmlFor="FloatingInput1">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <ul className='colors ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <h5 className="sub-title">Size</h5>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" name="" id="" />
                                    <lable className="form-check-lable">S (2)</lable>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" name="" id="" />
                                    <lable className="form-check-lable">M (2)</lable>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="checkbox" name="" id="" />
                                    <lable className="form-check-lable">L (2)</lable>
                                </div>

                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Product Tags</h3>
                        <div>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Headphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Laptops</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Airpod</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Mobile</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Tablet</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Random Product</h3>
                        <div>
                            <div className="random-products mb-3 d-flex">
                                {/* Random product will be here */}
                                <div className="w-50">
                                    <img src="images/MR2N3ref_VW_34FR_watch-40-alum-m.webp" alt=""  className='img-fluid'/>
                                </div>
                                <div className="w-50 ml-5">
                                    <h6>Kids Apple Watch Series 6</h6>
                                       <ReactStars
                                        count={5} 
                                        size={16} 
                                        value='3' 
                                        edit={false} 
                                        activeColor='#ffd700'
                                        />
                                    <b>$100.00</b>
                                </div>
                            </div>
                            <div className="random-products d-flex">
                                {/* Random product will be here */}
                                <div className="w-50 ml-5">
                                    <h6>Kids HeadPhone Series 3</h6>
                                       <ReactStars
                                        count={5} 
                                        size={16} 
                                        value='3' 
                                        edit={false} 
                                        activeColor='#ffd700'
                                        />
                                    <b>$150.00</b>
                                </div>
                                <div className="w-50">
                                    <img src="images/fueatured/airpods.webp" alt=""  className='img-fluid'/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9"></div>
            </div>
        </div>
    </div>
    </>
  )
}
