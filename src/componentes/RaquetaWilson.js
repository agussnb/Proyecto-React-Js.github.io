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
            <div className='card bg-dark'>
                <img src="/imagenes/raquetaWilson.jpg" alt="" />
                <div className='card-body'>
                    <h5 className='card-title text white'>Raqueta Wilson</h5>
                    <p className='card-text'>Wilson Blade 98 V7</p>
                    <p className='card-text'>Precio: $90.000</p>
                    <button onClick={agregarClick}>Agregar al carrito</button>
                    <p className='card-text'>{contador} Unidad/es</p>
                    <button onClick={sacarClick}>Sacar del carrito</button>
                </div>
            </div>
        </div>
  )
}

export default RaquetaWilson

/*<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */

/* 
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
            </div>
    </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  */

/*    <div className="card bg-light">
    <img className="card-img-top" src="imagenes/raquetaWilson.jpg" alt="raqueta wilson" />
    <div className="card-body">
        <h5 className="card-title text-white">Raqueta Wilson</h5>
        <p className="card-text">Wilson Blade 98 V7</p>
        <p className="card-text">Precio: $90.000</p>
        <button onClick={agregarClick}>Añadir al carrito</button>
        <p id='pContador'>{contador} Unidad/es</p>
        <button onClick={sacarClick}>Quitar del carrito</button>
    </div>
</div>  */