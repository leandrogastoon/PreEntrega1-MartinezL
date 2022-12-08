import React from "react";
import '../Item/Item.css';

import ItemCount from "../ItemCount/ItemCount";

const Item = ({item}) => {
    return (
    <div className="containerProductos">
        <p>{item.name}</p>
        <img className="imgCamiseta" src={item.img}></img>
        <h4>${item.precio}</h4>
        <ItemCount/>
    </div>
    );
};

export default Item;