import React from "react";
import Navbar from "../Navbar/Navbar";

import ItemCount from "../ItemCount/ItemCount";

import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css';

import camtitular from "../ItemList/img/camiseta-titular--argentina-22.jpg";
import camsuplente from "../ItemList/img/camiseta-alternativa-argentina-22.jpg";
import camprepartido from "../ItemList/img/camiseta-prepartido-seleccion-argentina.jpg";

const items = [
    {
        id : 1000,
        name : "CAMISETA TITULAR ARGENTINA 22",
        descripcion : "LA NUEVA CAMISETA DE ARGENTINA PARA LOS HINCHAS DE LA SELECCIÓN , HECHA CON MATERIAL RECICLADO 100% Argentina. Diseñada para los hinchas, ofrece comodidad en todo momento gracias a su tejido suave con tecnología de absorción AEROREADY. Los detalles en la parte interior trasera del cuello están inspirados en la bandera nacional que los jugadores representan con tanto orgullo. Un producto hecho parcialmente con contenido reciclado generado a partir de desechos de producción, tales como recortes de tela, y desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen.",
        stock : 100,
        img : camtitular
    },

    {
        id : 1001,
        name : "CAMISETA ALTERNATIVA ARGENTINA 22",
        descripcion : "UNA CAMISETA CÓMODA PARA EL ESCENARIO MÁS IMPORTANTE, HECHA CON MATERIALES RECICLADOS La camiseta alternativa de Argentina representa la igualdad de género. Luce tonos morados vibrantes y estampados llamativos inspirados en el Sol de Mayo de la bandera nacional. Creada para envolver a los hinchas en comodidad, esta camiseta incorpora tecnología de absorción AEROREADY. Luce el escudo del club tejido. Hecho con materiales 100 % reciclados, este producto representa solo una de nuestras soluciones para ayudar a acabar con los residuos plásticos.",
        stock : 100,
        img : camsuplente
    },
    
    {
        id : 1002,
        name : "CAMISETA PREPARTIDO ARGENTINA 22",
        descripcion : "UNA CAMISETA DE CALENTAMIENTO DE LA SELECCIÓN ARGENTINA HECHA CON MATERIALES RECICLADOS Calentá con estilo. Una fusión de los clásicos colores de suplente y la energía de los 90, esta es la camiseta que usan los jugadores de Argentina antes del silbato inicial. La tecnología AEROREADY absorbe la humedad para mantener su piel seca y cómoda en cada movimiento en la cancha. Luce el escudo del club tejido en el pecho para destacar lo que sentís por el equipo. Hecho con materiales 100% reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
        stock : 100,
        img : camprepartido
    }
]

const ItemListContainer = ({titulo, children}) => {
    return (
        <div className="contItem">
            <Navbar/>
            
            <h1>{titulo}</h1>
            {children}

            <ItemCount />
            <ItemList items={items} />
             
        </div>
    );
};

const promesa = new Promise((resolve) => {  //probar hacerlo en un useEffect
    setTimeout(() => {
        resolve (items)
    }, 3000);
})

promesa.then((res) =>{
    console.log(res)
})

export default ItemListContainer;