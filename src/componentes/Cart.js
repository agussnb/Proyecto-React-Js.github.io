import React, { useEffect } from "react";
import { useCarrito } from "./CustomProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, eliminarProducto, vaciarCarrito, setCarrito} = useCarrito();

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem("carrito")) || [];
    if (!productosGuardados) {
      productosGuardados = [];
    }
    console.log(productosGuardados);
    console.log(carrito)
    setCarrito(productosGuardados);
  }, [setCarrito]);

  if (!carrito || carrito.length === 0) {
    return <h1>No hay productos en el carrito</h1>;
  }

  const productos = carrito
  console.log(productos)
  return (
    <div>
 
  <div>
    <h1 className="h1ProdutosCarrito">Productos en el carrito:</h1>
    <ul className="d-grid">
      {productos.map(producto => (
        <div key={producto.id} className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mb-3">
          <div className="card bg-dark cardsProductos">
            <img className="card-image" src={`/imagenes/${producto.image}`} alt="#" />
            <div className="card-body">
              <p className="card-text">Producto: {producto.title}</p>
              <p className="card-text">Descripcion: {producto.description}</p>
              <p className="card-text">Cantidad: {producto.cantidad}</p>
              <p className="card-text">Precio total: ${producto.price * producto.cantidad}</p>
              <p className="card-text">Precio individual del producto: ${producto.price}</p>
            </div>
            <button onClick={() => eliminarProducto(producto)} className="btn btn-warning">Eliminar producto del carrito</button>
          </div>
          
        </div>
      ))}
    </ul>
  </div>
  <button onClick={() => vaciarCarrito(productos)} className="btn btn-warning vaciarCarrito">Vaciar carrito</button>
  <Link to="/checkout" className="btn btn-dark finalizarCompra">Finalizar compra</Link>
</div>

  );
};

export default Cart;
