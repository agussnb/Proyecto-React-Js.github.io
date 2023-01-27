
import React from "react"
import ItemDetail from "./ItemDetail"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const {id} = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/productos.json');
        const productos = await response.json();
        const product = await productos.find((producto) => producto.id === id);
        setSelectedProduct(product);
    }
    fetchData();
  }, [id]);

  if (!selectedProduct) {
    return <p>Cargando...</p>

  }
  return <ItemDetail key={selectedProduct.id} data={selectedProduct} />;
    
};

export default ItemDetailContainer