import React from "react";
import Item from "../Item/Item";

import './ItemList.css';

const ItemList = ({items}) => {
    return (
        <div className="containerProductos">
            {items.map((item) => (
                <Item className="producto" item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default ItemList;