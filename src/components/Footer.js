import React from 'react';
import { Link } from 'react-router-dom'
import { FaLinkedin,FaGithub ,FaYoutube, FaInstagram   } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

const Footer = ()=>{
    return (
        <React.Fragment>
            {/* first Footer */}
            <footer className='py-3'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-15 align-items-center">
                                <GrSend className='text-white fs-1 mr-0'/>
                                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                        <div class="input-group">
                                <input type="text" class="form-control py-1" placeholder="Your email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                                <span class="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Middle footer */}
            <footer className='py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='mb-4 text-white'>Contact Us</h4>
                            <div>
                                <address className='text-white'>
                                Afghanistan, Herat - IbnSina 19<br/>
                                PinCode: 30001
                                </address>
                                <a  href='tel: +937778987' className='text-white mt-2 d-block mb-0'>+(93)77899977</a>
                                <a  href='mailto:www.Gmail.com' className='text-white mt-2 d-block mb-4'>bestInTechh@info.com</a>
                                <div className="social-icons d-flex align-items-center gap-30">
                                    <a href="/">
                                        <FaLinkedin className='text-white fs-4'/>
                                    </a>
                                    <a href="/">
                                        <FaInstagram className='text-white fs-4'/>
                                    </a>
                                    <a href="/">
                                        <FaGithub className='text-white fs-4'/>
                                    </a>
                                    <a href="/">
                                        <FaYoutube className='text-white fs-4'/>
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Inforamtion</h4>
                            <div className='Footer-Links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'> Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div> 
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Account</h4>
                            <div className='Footer-Links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Search</Link>
                                <Link className='text-white py-2 mb-1'>About us</Link>
                                <Link className='text-white py-2 mb-1'>FQ</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>                        </div>
                        <div className="col-2">
                            <h4 className='mb-4 text-white'>Quick List</h4>
                            <div className='Footer-Links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Accessories</Link>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Phones</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 mb-0 text-white">
                            <p className="text-center">
                                &copy; {new Date().getFullYear()}; Powered by Fatemeh Bakhshi
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;
