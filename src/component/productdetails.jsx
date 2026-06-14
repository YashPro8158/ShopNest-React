import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import './productdetails.css'


export default function Productdetails() {

    const { id } = useParams();
    const [mainproduct, Setmainproduct] = useState(null)
    useEffect(() => {

        async function loadproductdetails() {
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json();
            Setmainproduct(data);

        }
        loadproductdetails();
    }, [id])

    if (!mainproduct) {
        return <h2>Loading...</h2>

    }
    return (
        <>

            <div className="maincontainer">
                <nav>
                    <Link to="/store" className="backnavigation">Back to store</Link>
                </nav>
                <div className="productcontainer">

                    <div className="left">
                        <img
                            src={mainproduct.thumbnail}
                            alt={mainproduct.title}
                        />
                    </div>
                    <div className="right">
                        <h1>Title: {mainproduct.title}</h1>
                        <div className="minidetails">
                            <p className="detailbox">Rating: {mainproduct.rating}  </p>
                            <p className="detailbox">Brand: {mainproduct.brand}  </p>
                            {mainproduct.stock == 0 ? <p className="detailbox">Stock: Out of  Stock</p> : <p className="detailbox">Stock:  Available</p>}
                            <p className="detailbox">Discount: {mainproduct.discountPercentage}%  </p>

                        </div>
                        <p>Description: {mainproduct.description}</p>
                        <p>Price: ₹ {mainproduct.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}