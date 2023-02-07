import React from "react";
import { Link } from "react-router-dom";
const Marcas = ({data}) => {
    return (
     <div className="card-group">
         <div className="contenedorCard">
            <div className="card bg-dark cardsProductos">
                <h3 className="card-title text-white">{data.title}</h3>
                <img src={`/imagenes/${data.id}.jpg`} alt="" />
                <div className="card-body">
                    <p className="card-text">{data.description}</p>
                    <p className="card-text">Precio ${data.price}</p>
                    <Link className='linkProductos text-white' to={"/item/"+data.id}>Ver mas</Link>
                </div>
            </div>
        </div>
     </div>
    );
  };
  
export default Marcas