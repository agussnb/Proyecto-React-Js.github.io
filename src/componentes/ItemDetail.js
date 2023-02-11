import React from "react";
import { useState } from "react";
import { useCarrito } from "./CustomProvider";
import ItemCount from "./ItemCount";
const ItemDetail = ({data})=>{

    const [confirmado, setConfirmado] = useState(false)
    const [cantidad, setCantidad] = useState(0)
    const {agregarProducto} = useCarrito()

    const onAdd = (parametro) =>{
        setConfirmado(true)
        setCantidad(parametro)
    }
    const handleClick = ()=>{
        agregarProducto({data},cantidad)
    }
    return(
        <div className='contenedorCard'>
            <div className='card bg-dark cardsProductos'>
            <h3 className='card-title text-white'>{data.title}</h3>
                <img src={`/imagenes/${data.image}`}alt={data.id} />
                <div className='card-body'>
                    <p className='card-text'>{data.description}</p>
                    <p className='card-text'>Precio ${data.price}</p>
                    <p className="card-text">Stock disponible: {data.stock}</p>
                </div>
                <ItemCount onAdd={onAdd} />
                {confirmado && <button className="btn btn-light" onClick={handleClick}>Agregar al carrito</button>}
            </div>
        </div>
    )
}
export default ItemDetail