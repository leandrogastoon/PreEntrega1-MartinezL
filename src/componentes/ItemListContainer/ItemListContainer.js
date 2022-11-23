import React from "react";

import './ItemListContainer.css';

const ItemListContainer = ({titulo, children}) => {
    return (
        <div className="contItem">
            <h1>{titulo}</h1>
            {children}
        </div>
          
        
    );
};

export default ItemListContainer;