import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

/*ARREGLA EL PROBLEMA DEL LOCALSTORAGE */

const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
  const valorDelContexto = useContext(contexto)
  return valorDelContexto
}

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const [totalProductos, setTotalProductos] = useState(0)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/productos.json')
      .then(res => res.json())
      .then(productos => setProductos(productos))
      .catch(error => console.log(error))
  }, [])

  const agregarProducto = (productos, cantidad) => {
    const productoEnCarrito = carrito.find(p => p.id === productos.data.id);
    let nuevoProducto = { ...productos.data };
    console.log(nuevoProducto)
    if (productoEnCarrito) {
      const nuevaCantidad = productoEnCarrito.cantidad + cantidad;
      if (nuevaCantidad > nuevoProducto.stock) {
        toast.error('No hay suficiente stock');
        return;
      }
      productoEnCarrito.cantidad = nuevaCantidad;
      nuevoProducto.stock -= cantidad;
      setCarrito([...carrito]);
    } else {
      if (cantidad > nuevoProducto.stock) {
        toast.error('No hay suficiente stock');
        return;
      }
      setCarrito([...carrito, { ...nuevoProducto, cantidad }]);
     
      nuevoProducto.stock -= cantidad;
    }
   
    setTotalProductos(totalProductos + cantidad);
  };
  useEffect(() => {
    console.log("Antes de guardar en localstorage: ", carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log("Despues de guardar en localstorage: ", JSON.parse(localStorage.getItem("carrito")));
  }, [carrito]);

  const eliminarProducto = (producto) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== producto.id);
    setCarrito(nuevoCarrito);
    setTotalProductos(totalProductos - producto.cantidad);
  
    const productosEnLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
    const productosActualizados = productosEnLocalStorage.filter((p) => p.id !== producto.id);
    localStorage.setItem("carrito", JSON.stringify(productosActualizados));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
    setTotalProductos(0);
    localStorage.removeItem("carrito");
  };
  const valorDelContexto = {
    carrito: carrito,
    totalProductos: totalProductos,
    setCarrito: setCarrito,
    setTotalProductos: setTotalProductos,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    vaciarCarrito: vaciarCarrito,
  }
  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider
