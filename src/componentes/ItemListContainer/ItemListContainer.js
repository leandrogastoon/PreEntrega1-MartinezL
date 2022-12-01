import React from "react";
import Navbar from "../Navbar/Navbar";

import './ItemListContainer.css';

const ItemListContainer = ({titulo, children}) => {
    return (
        <div className="contItem">
            <Navbar/>
            
            <h1>{titulo}</h1>
            {children}
            
        </div>
          
        
    );
};

export default ItemListContainer;