import React from "react";
import './home.css'
export default function Home() {
    return (
        <>
            <div className="top">
                <h1>Home Page</h1>
            </div>
            <div className="containerhome">
                <div className="left" style={{ border: 'none', width:'70%'}}>
                    <img src="https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp" alt="Laptop" />
                </div>
                <div className="right" style={{ border: 'none' }}>
                    <h1>Title: Apple MacBook Pro 14 Inch Space Grey</h1>

                    <p>Description: Description: The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.</p>
                    <p>Price: ₹ 1999.99</p>
                </div>
            </div>
        </>
    )
}