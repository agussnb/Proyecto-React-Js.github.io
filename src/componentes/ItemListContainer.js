import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])



    useEffect(() => {
        const pedido = fetch("https://fakestoreapi.com/products", {
            method:"POST",
            body:JSON.stringify({
                title:"Grip Babolat",
                price:400,
                id:"GripBabolat"
            })
        })

        pedido
            .then((respuesta) => {
                const productos = respuesta.json()
                return productos

            })
            .then((productos) => {
                setProductos(productos)
                setLoad(true)
            })
            .catch((error) => {
                console.log(error)
            })

    },  [])
    return (
        <div className="divLoadProductos">
            {load ? 'Lista de productos cargada' : 'Cargando lista de productos...'}
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer