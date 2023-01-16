import React from 'react'
import { Link } from "react-router-dom"
const Item =({ producto }) => {

  return (
        <div className='card text-white bg-dark divProductos'>
            <article className='articleProductos card-body' key={producto.id}>
                <h3 className='h3Productos card-title'>{producto.title}</h3>
                <img className='imagenesProductos card-img' src={`/imagenes/${producto.id}.jpg`} alt={producto.title}/>
                <p className='descripcionProductos'>{producto.description}</p>
                <p className='precioProductos'><strong>Precio:</strong> ${producto.price}</p>
                <Link className='linkProductos text-white' to={"/item/"+producto.id}>ver mas</Link>
            </article>
        </div>
  )
}

export default Item