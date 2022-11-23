import React from "react";

import CartWidget from '../CartWidget/CartWidget.js'

import './LinksNav.css'

const LinksNav = ({titulo, children}) => {
    return (
        <div className="contItems">
            <h2 className="titulo">NIKE</h2>
            <ul className="items">
                <li><a href="#">Botines</a></li>
                <li><a href="#">Equipos</a></li>
                <li><a href="#">Accesorios</a></li>
            </ul>
            <CartWidget/>
            {children}
        </div>
    );
};

export default LinksNav;