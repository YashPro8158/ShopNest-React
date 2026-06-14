import React from "react";
import './about.css'

export default function About() {
    return (
        <>
            <div className="top">
                <h1>About Page</h1>
            </div>
            <div className="containerabout">

                <div className="aboutcontent">
                    <p>
                        Welcome to ShopNest!

                    </p>

                    <p> ShopNest is a modern e-commerce web application built using React. It allows users to browse products, search items, filter by category, sort products by price, and view detailed product information.</p>

                    Features:
                    <ul style={{ margin: "10px 0px" }}>
                        <li>✓ Product Listing</li>
                        <li>✓ Search Products</li>
                        <li>✓ Category Filtering</li>
                        <li>✓ Price Sorting</li>
                        <li>✓ Product Details Page</li>
                        <li>✓ Responsive Design</li>
                    </ul>

                    Technologies Used:
                    <ul style={{ margin: "10px 0px" }}>
                        <li>• React</li>
                        <li>• React Router</li>
                        <li>• CSS</li>
                        <li>• DummyJSON API</li>
                    </ul>
                </div>
            </div>
        </>
    )
}