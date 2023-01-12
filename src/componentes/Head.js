import React from 'react'
import { Link } from 'react-router-dom'
const Head = () => {
  return (
    <div className="card-group">
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/raquetaHead.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Raqueta Head</h5>
            <p className="card-text">Head Gravity MP Lite</p>
            <Link className='linkProductos text-white' to={"/Productos/raquetaHead"}>ver mas</Link>
        </div>
    </div>
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/tuboHead.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Pelotas Head</h5>
            <p className="card-text">Tubo de pelotas Head Tour y Tour XT</p>
            <Link className='linkProductos text-white' to={"/Productos/tuboHead"}>ver mas</Link>
        </div>
    </div>
    <div className="card bg-dark">
        <img className="card-img-top" src="imagenes/raqueteroHead.jpg" alt="" />
        <div className="card-body">
            <h5 className="card-title text-white">Raquetero Head</h5>
            <p className="card-text">Raquetero ideal para tus raquetas Head</p>
            <Link className='linkProductos text-white' to={"/Productos/tuboHead"}>ver mas</Link>
        </div>
    </div>
</div>
  )
}

export default Head