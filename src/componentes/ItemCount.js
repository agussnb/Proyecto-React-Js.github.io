import { useState } from "react"
import {db} from '../firebase'
import { collection, getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-toastify"

const ItemCount = ({onAdd}) => {
  const [stock, setStock] = useState(0)
  const {id} = useParams()
  const productosCollection = collection(db, 'productos')
  const referencia = doc(productosCollection,id)
  useEffect(()=>{
    getDoc(referencia).then(doc=>{
      if(doc.exists){
        setStock(doc.data().stock)
      }
    })
  },[]);

  const [contador, setContador] = useState(1)
  //const {carrito} = useContext(contexto)

  const handleSumar = () => {
    if(contador < stock){
      return setContador(contador + 1)
    }
    if(contador >= stock){
      toast.error('No hay mas stock disponible.',{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    }
  }

const handleRestar = () => {
  if (contador > 1) {
    setContador(contador - 1)
  }
}

  const handleConfirmar = () => {
    onAdd(contador)
  }


  const handleResetear = () => {
    setContador(1)
  }

  return (
    <div>
      <button className="btn btn-light" onClick={handleSumar}>+</button>
      <button className="btn btn-light" onClick={handleRestar}>-</button>
      <p className="text-light">Unidades a agregar al carro : {contador}</p>
      <button className="btn btn-light" onClick={handleResetear}>reset</button>
      <button className="btn btn-light" onClick={handleConfirmar}>confirmar</button>
    </div>
  )
}

export default ItemCount