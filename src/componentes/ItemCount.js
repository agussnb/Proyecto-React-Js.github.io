import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ItemCount = ({ onAdd }) => {
const [stock, setStock] = useState(0)
const [contador, setContador] = useState(1)
const { id } = useParams()

useEffect(() => {
fetch('/productos.json')
.then(res => res.json())
.then(data => {
const product = data.find(p => p.id === id)
setStock(product.stock)
console.log(product)
})
}, [id])

const handleSumar = () => {
if (contador < stock) {
return setContador(contador + 1)
}
if (contador >= stock) {
toast.error('No hay más stock disponible.', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
})
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
<p className="text-light">Unidades a agregar al carro: {contador}</p>
<p className="text-light confirm">Presionar confirmar cuando tenga seleccionadas las unidades deseadas a agregar al carro.</p>
<button className="btn btn-light" onClick={handleResetear}>reset</button>
<button className="btn btn-light" onClick={handleConfirmar}>confirmar</button>
</div>
)
}

export default ItemCount