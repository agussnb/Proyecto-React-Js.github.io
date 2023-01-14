import React from 'react'
import { useState } from "react"


const RaquetaHead = () => {

    const [contador, setContador] = useState(0)

    const agregarClick = () => {
    setContador(contador + 1)
}
const sacarClick = ()=>{
    setContador(contador - 1)
}
  return (
        <div className='contenedorCard'>
            <div className='card bg-dark cardsProductos'>
                <img src="/imagenes/raquetaHead.jpg" alt="" />
                <div className='card-body'>
                    <p className='card-text'>Head Gravity MP Lite</p>
                    <p className='card-text'>Descripción del producto:</p>
                    <ul>
                        <li>Tamaño de cabeza: 100</li>
                        <li>Composición: Graphene 360</li>
                        <li>Patrón de encordado: 16x20</li>
                    </ul>
                    <p className='card-text'>Precio: $78.000</p>
                    <p className='card-text'>Unidades seleccionadas {contador}</p>
                    <button className='btn btn-light' onClick={agregarClick}>+</button>
                    <button className='btn btn-light' onClick={sacarClick}>-</button>
                    
                </div>
            </div>
        </div>
  )
}

export default RaquetaHead

