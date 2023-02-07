import React from "react";
import { useState } from "react";
//import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../CartContext";
const ItemDetail = ({data})=>{

    const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	    const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};
    
    return(
        <div className='contenedorCard'>
            <div className='card bg-dark cardsProductos'>
            <h3 className='card-title text-white'>{data.title}</h3>
                <img src={`/imagenes/${data.image}`}alt="" />
                <div className='card-body'>
                    <p className='card-text'>{data.description}</p>
                    <p className='card-text'>Precio ${data.price}</p>
                    <p className="card-text">Stock disponible: {data.stock}</p>
                </div>
                <ItemCount/>
            </div>
        </div>
    )
}
export default ItemDetail