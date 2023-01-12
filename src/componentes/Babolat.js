import React from 'react'
import { Link } from 'react-router-dom'
const Babolat = () => {
  return (
    <div className="card-group">
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/raquetaBabolat.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Raqueta Babolat</h5>
            <p className="card-text">Babolat Pure Aero Rafa</p>
            <Link className='linkProductos text-white' to={"/Productos/raquetaBabolat"}>ver mas</Link>
        </div>
    </div>
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/tuboBabolat.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Pelotas Babolat</h5>
            <p className="card-text">Tubo de pelotas Babolat Team</p>
            <Link className='linkProductos text-white' to={"/Productos/tuboBabolat"}>ver mas</Link>
        </div>
    </div>
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/raqueteroBabolat.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Raquetero Babolat</h5>
            <p className="card-text">Raquetero ideal para tus raquetas Babolat</p>
            <Link className='linkProductos text-white' to={"/Productos/tuboBabolat"}>ver mas</Link>
        </div>
    </div>
</div>
  )
}

export default Babolat