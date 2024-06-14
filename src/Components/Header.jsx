import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = ({ cart }) => {
    return (
        <>
            <nav className="Header-Container">
                <div className="logo">
                    Food-Cart
                </div>
                <ul >
                    <li className="list" >
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="list">
                        <Link to={"/Cart"}>View-Cart<span className="cart-count">{cart.length}</span></Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;