import React from 'react'
import { Link } from 'react-router-dom'

const Wilson = ({datos}) => {
  return (
    <div className="card-group">
        <div className="card bg-dark" key={datos.id}>
            <img className="card-img-top" src={`/imagenes/${datos.id}.jpg`} alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">{datos.title}</h5>
                <p className="card-text">{datos.description}</p>
                <Link className='linkProductos text-white' to={"/Productos/"+datos.id}>ver mas</Link>
            </div>
        </div>
    </div>
  )
}

export default Wilson