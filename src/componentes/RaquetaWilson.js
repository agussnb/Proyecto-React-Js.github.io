import React from 'react'
import { useState } from "react"


const RaquetaWilson = () => {

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
                <img src="/imagenes/raquetaWilson.jpg" alt="" />
                <div className='card-body'>
                    <p className='card-text'>Wilson Blade 98 V7</p>
                    <p className='card-text'>Descripción del producto:</p>
                    <ul>
                        <li>Tamaño de cabeza: 104</li>
                        <li>Composición: Grafito</li>
                        <li>Patrón de encordado: 18x19</li>
                    </ul>
                    <p className='card-text'>Precio: $90.000</p>
                    <p className='card-text'>Unidades seleccionadas {contador}</p>
                    <button className='btn btn-light' onClick={agregarClick}>+</button>
                    <button className='btn btn-light' onClick={sacarClick}>-</button>
                    
                </div>
            </div>
        </div>
  )
}

export default RaquetaWilson

