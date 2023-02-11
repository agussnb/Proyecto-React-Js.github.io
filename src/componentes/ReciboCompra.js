import React from 'react'
import { useCarrito } from './CustomProvider'

const ReciboCompra = (props) => {
  const {carrito} = useCarrito()
  const productos = carrito
  const productosArray = Object.values(carrito)
  console.log(typeof productos, productos)
  console.log('los productos'+productos)
  
  let precioTotal = 0;
  productos.forEach(producto => {
    precioTotal += (producto.price * producto.cantidad) * 1.21;
  });
  precioTotal=parseInt(precioTotal)
  return (
    <div>
          <div>
            <h1 className='h1ReciboCompra'>Su compra fue realizada con exito.</h1>
            <h2 className='h2ReciboCompra'>Detalles de la compra</h2>
            <br />
            {productosArray.map(producto => (
            <div key={producto.id} className='divReciboCompra'>
              <p className='pReciboCompra'>Titulo producto: {producto.title}</p>
              <p className='pReciboCompra'>Descripcion producto: {producto.description}</p>
              <p className='pReciboCompra'>Cantidad: {producto.cantidad}</p>
              <p className='pReciboCompra'>Precio del producto: ${producto.price}</p>
              <p className='pReciboCompra'>Precio con IVA: ${(producto.price * producto.cantidad) * 1.21}</p>
            </div>
          ))}
            <p className='pReciboCompra'>IVA: 21%</p>
            <p className='pReciboCompra'>Precio final: ${precioTotal}</p>
            <br />
            <div className="divDatosComprador">
              <h3 className='h3DatosComprador'>Datos del comprador</h3>
              <br />
              <p className='pReciboCompra'>Nombre y apellido: {props.paymentFormData.name}</p>
              <p className='pReciboCompra'>Pais: {props.paymentFormData.pais}</p>
              <p className='pReciboCompra'>Provincia/Estado: {props.paymentFormData.provincia}</p>
            </div>
          </div>
    </div>
  ) 
}

export default ReciboCompra
