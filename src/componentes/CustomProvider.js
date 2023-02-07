import { createContext, useContext, useState } from "react"

const contexto = createContext()
const Provider = contexto.Provider


export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}

const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)

    const agregarProducto = (product)=>{
        setCarrito([...carrito,product])
        setTotalProductos(totalProductos + 1)
    }
    const eliminarProducto = (product)=>{
        setCarrito(carrito.filter((p)=>p!==product))
        setTotalProductos(totalProductos - 1)
    }
    const vaciarCarrito = ()=>{
            setCarrito([])
            setTotalProductos(0)
    }
    const estaEnCarrito = ()=>{

    }
    const valorDelContexto = {
        carrito : carrito,
        totalProductos : totalProductos,
        setCarrito : setCarrito,
        setTotalProductos : setTotalProductos,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        vaciarCarrito : vaciarCarrito,
        estaEnCarrito : estaEnCarrito,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider