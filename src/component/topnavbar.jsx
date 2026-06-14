import React from "react";
import './topnavbar.css'
import { Link, Outlet } from 'react-router-dom';
export default function Topnavbar({ cartproducts }) {
    return (

        <>
            <div className="navbarcontainer">
                <div className="logo">ShopNest</div>
                <nav>
                    <Link to="/" className='Link'>Home</Link>
                    <Link to="/about" className='Link'>About</Link>
                    <Link to="/store" className='Link'>Store</Link>
                    <Outlet />
                </nav>
                    <div className="menucartbox">
                        <i className="fi fi-rr-shopping-cart-add"></i>
                        <div className="countcart">{cartproducts.length}</div>
                    </div>
            </div>

        </>
    )

}   