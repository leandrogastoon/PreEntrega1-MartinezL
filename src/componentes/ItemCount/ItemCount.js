import React, { useState } from "react";

import '../ItemCount/ItemCount.css';

const ItemCount = () => {
    const [prenda, setAgregar] = useState(0);

    const botonSumarPrenda = () => { /*agregar condicional para cantidad de stock*/
        setAgregar(prenda + 1);
    };

    const botonRestarPrenda = () => {
        if (prenda == 0) {
            console.log('nada');
        } else{
            setAgregar(prenda -1);
        };
    };
    

    return (
        <div className="contenedorBotones">
            <div className="contSumarPrenda">
                <button className="botonRestar" onClick={botonRestarPrenda}>-</button>
                <p>{prenda}</p>
                <button className="botonSumar" onClick={botonSumarPrenda}>+</button>
            </div>      
            <button className="botonAgregarCarrito">Agregar al carrito</button>
        </div>
     );
}; 

export default ItemCount;