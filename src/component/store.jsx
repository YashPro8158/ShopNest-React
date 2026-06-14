import React, { useEffect, useState } from "react";
import './store.css'
import { Link, Outlet } from 'react-router-dom';
async function fetchproducts() {
    const res = await fetch("https://dummyjson.com/products?limit=194");
    const data = await res.json();
    return data.products;
}
export default function Store() {
    const [products, Setproducts] = useState([]);
    const [originalproducts, Setorginal] = useState([]);
    const [searchproduct, Setsearch] = useState("");
    const [load, Setload] = useState(true);
    const [categoryproducts, SetCategory] = useState("");
    const [cartcount, SetCartcount] = useState("");
    const filteredproducts = products.filter(data => (
        data.title.toLowerCase().includes(searchproduct.toLowerCase()) || data.description.toLowerCase().includes(searchproduct.toLowerCase())
    ) && (categoryproducts === ""
        ||
        data.category === categoryproducts))
    const category = ["beauty","fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ]
    useEffect(() => {
        async function loadproducts() {
            const allproduts = await fetchproducts();
            Setproducts(allproduts);
            Setorginal(allproduts);
            Setload(false)
        }
        loadproducts();
    }, [])
    return (
        <>
            <div className="top">
                <h1>Store Page</h1>
            </div>
            <div className="filterbox">
                <button className="filterstyle" onClick={() => {
                    Setproducts(originalproducts)
                }}>Reset Button</button>

                <button className="filterstyle" onClick={() => {
                    const sortedproducts = [...products].sort((a, b) => a.price - b.price)
                    Setproducts(sortedproducts)
                }}> Low to High</button>

                <button className="filterstyle" onClick={() => {
                    const sortedproducts = [...products].sort((a, b) => b.price - a.price)
                    Setproducts(sortedproducts)
                }}> High to Low</button>
                <input type="search" placeholder="Search products here... " value={searchproduct} onChange={(e) => Setsearch(e.target.value)} className="filterstyle" />
                <select name="categoryfilter" className="filterstyle" value={categoryproducts} onChange={(e) => SetCategory(e.target.value)}>
                    <option value="">All category</option>
                    {category.map(data => <option value={data}>{data}</option>)}
                </select>                
            </div>
            {filteredproducts.length !== 0 ? <h3>Showing {filteredproducts.length} products</h3> : null}
            <div className="containerproducts">
                {
                    load ? <h2>Loading...</h2> : filteredproducts.length !== 0 ? filteredproducts.map(data =>
                        <div key={data.id} className="productcard" >
                            <h2>{data.title}</h2>
                            <Link to={`/store/${data.id}`} >
                                <img src={data.thumbnail} alt={data.title} />
                            </Link>
                            <p>Rating: {data.rating}</p>
                            <p>Brand: {data.brand}</p>

                            {data.stock <= 0 ? <p>Out of Stock</p> :
                                <p>Available</p>}
                            <p>discount: {data.discountPercentage}%</p>
                            <p>₹ {data.price}</p>
                        </div>
                    ) : <h2>No products Found</h2>
                }
            </div>
        </>    )
}