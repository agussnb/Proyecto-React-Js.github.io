
import React from "react"
import Marcas from "./Marcas"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"


const MarcasContainer = () => {
  const {categoryId} = useParams()
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/productos.json');
        const products = await response.json();
        const productsWithMatchingCategory = products.filter((product) => product.categoryId === Number(categoryId));
        console.log([productsWithMatchingCategory])
        setSelectedProducts(productsWithMatchingCategory);
        setLoading(false)
    }
    fetchData();
},[categoryId]);

  
  if (loading) {
    return <p>Cargando...</p>
  }
  
  return (
    <div>
      {selectedProducts.map((product) => (
        <Marcas key={product.id} data={product} />
      ))}
    </div>
  );
}
export default MarcasContainer
