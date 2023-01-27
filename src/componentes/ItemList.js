import React, { useState, useEffect } from 'react'
import Item from './Item'

const ItemList = ({onSelectProduct}) => {
const [productos, setProductos] = useState([]);

useEffect(() => {
fetch('/productos.json')
.then(res => res.json())
.then(data => setProductos(data))
}, []);

return (
<div>
{productos.map((producto) => {
return (
    <>
    <Item producto={producto} key={producto.id} onClick={() => onSelectProduct(producto.id)}/>
    </>
)
})}
</div>
)
}

export default ItemList;




