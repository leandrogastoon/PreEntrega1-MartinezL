import React from "react";
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';
import LinksNav from "../LinksNav/LinksNav.js";



import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <LinksNav/>
            <ItemListContainer titulo= "titulo agregado con prop">
                <div>children</div>
            </ItemListContainer>
        </div>
     );
};

export default Navbar;