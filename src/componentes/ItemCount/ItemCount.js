import React, { useState } from "react";

import '../ItemCount/ItemCount.css';

const ItemCount = ({items}) => {
    const [agregar, setAgregar] = useState(0);

    const botonSumarPrenda = () => { /*agregar condicional para cantidad de stock*/
        setAgregar(agregar + 1);
    };

    const botonRestarPrenda = () => {
        if (agregar === 0) {
            console.log('nada');
        } else{
            setAgregar(agregar -1);
        };
    };
    

    return (
        <div className="contenedorBotones">
            <div className="contSumarPrenda">
                <button className="botonRestar" onClick={botonRestarPrenda}>-</button>
                <p>{agregar}</p>
                <button className="botonSumar" onClick={botonSumarPrenda}>+</button>
            </div>      
            <button className="botonAgregarCarrito">Agregar al carrito</button>
        </div>
     );
}; 

export default ItemCount;