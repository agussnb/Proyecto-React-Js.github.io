import React from "react";
import { useState } from "react";
const ItemDetail = ({data})=>{
    const [contador, setContador] = useState(0)
   
    const agregarClick = () => {
    setContador(contador + 1)
}
const sacarClick = ()=>{
    setContador(contador - 1)
}
    return(
        <div className='contenedorCard'>
            <div className='card bg-dark cardsProductos'>
            <h3 className='card-title text-white'>{data.title}</h3>
                <img src={`/imagenes/${data.id}.jpg`}alt="" />
                <div className='card-body'>
                    <p className='card-text'>{data.description}</p>
                    <p className='card-text'>Precio ${data.price}</p>
                    <p className='card-text'>Unidades seleccionadas {contador}</p>
                    <button className='btn btn-light' onClick={agregarClick}>+</button>
                    <button className='btn btn-light' onClick={sacarClick}>-</button>
                    
                </div>
            </div>
        </div>
    )
}
export default ItemDetail