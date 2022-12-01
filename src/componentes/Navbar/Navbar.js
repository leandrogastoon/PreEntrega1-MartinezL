import React from "react";
import CartWidget from "../CartWidget/CartWidget.js";


import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <CartWidget />
        </div>
     );
};

export default Navbar;