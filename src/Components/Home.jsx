import { useState } from "react";
import React from "react";
import data from "../assets/Products";
import Product from "./Products";
import "./Home.css"
const Home = ({cart,setCart}) => {
    const [products] = useState(data);
    return (
        <>
            <div className="products-Container">
                {products.map((product) => (
                    <Product key={product.id}  product={product} cart={cart} setCart={setCart}  />
                ))}
            </div>
        </>
    );
}

export default Home;