import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { toast } from "react-toastify"

const productosCollection = collection(db,"productos")

const ItemListContainer = () => {

    const [load, setLoad] = useState(false)
    const [productos,setProductos] = useState([])

    useEffect(() => {
        toast.info("Cargando productos ...",{
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const pedidoFirestore = getDocs(productosCollection)
        pedidoFirestore
        .then((respuesta) => {
            const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setProductos(productos)
            setLoad(true)
            toast.dismiss()
            toast.success("Productos cargados!",{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
        .catch((error) => {
            console.log(error)
            toast.error("Hubo un error, vuelva a intentarlo!" + error.message,{
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        })
}, [])
    return (
        <div className="divLoadProductos">
            {load ? null : 'Cargando lista de productos...'}
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer