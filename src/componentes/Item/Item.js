import React from "react";

const Item = ({item}) => {
    return (
    <div>
        <p>{item.name}</p>
        <img src={item.img}></img>
    </div>
    );
};

export default Item;