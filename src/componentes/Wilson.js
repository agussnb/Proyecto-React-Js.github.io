import React from 'react'
import { Link } from 'react-router-dom'

const Wilson = () => {
  return (
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raquetaWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raqueta Wilson</h5>
                <p className="card-text">Wilson Blade 98 V7</p>
                <Link className='linkProductos text-white' to={"/Productos/raquetaWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/tuboWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Pelotas Wilson</h5>
                <p className="card-text">Tubo de pelotas Wilson Triniti</p>
                <Link className='linkProductos text-white' to={"/Productos/tuboWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raqueteroWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raquetero Wilson</h5>
                <p className="card-text">Raquetero ideal para tus raquetas Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/tuboWilson"}>ver mas</Link>
            </div>
        </div>
    </div>
  )
}

export default Wilson