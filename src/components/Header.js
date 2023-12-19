import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = ()=>{
    return (
        <React.Fragment>
            {/* First Header */}
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className="col-6">
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>Hotline :<a className='text-white' href='/'>+93 1999999</a></p>
                        </div>
                        <div className="menue"></div>
                    </div>
                </div>
            </header>
            {/* Middle Header */}
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2> 
                                <Link className='text-white'>Best In Tech</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"/>
                                <span class="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className='fs-6'/>
                                </span>
                                
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-item-center gap-10 text-white'>
                                        <img src="images/compare.svg" alt="compare Icon" />
                                        <p className='mb-0'>Compare <br/> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-item-center gap-10 text-white'>
                                        <img src="images/wishlist.svg" alt="WishList Icon" />
                                        <p className='mb-0'>Favorite <br/> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-item-center gap-10 text-white'>
                                        <img src="images/user.svg" alt="user" />
                                        <p className='mb-0'>Login <br/> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-item-center gap-10 text-white'>
                                        <img src="images/cart.svg" alt="cart" />

                                        <div className="d-flex flex-column">
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Bottom Header */}
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-1">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button 
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0" 
                                            type='button'
                                            id="dropdownMenu" 
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false" >

                                            <img src='images/menu.svg' alt='menu icon'/>
                                            <span> Categories</span>
                                          
                                        </button>
                                        <ul className='dropdown-menu' aria-labelledby='dropdownMenu'>
                                            <li>
                                                <a className="dropdown-item" href="#">Action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Another action</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Something else here</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className='d-flex align-item-center gap-15'>
                                        <NavLink to="/" >Home</NavLink>
                                        <NavLink to="/" >Store</NavLink>
                                        <NavLink to="/" >Blogs</NavLink>
                                        <NavLink to="/contact" >Contact</NavLink>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
export default Header;