
import React from "react"
import Marcas from "./Marcas"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"


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
    }
    fetchData();
},[categoryId]);

  
  if (loading) {
    return toast.info('Cargando...',{
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
  
  return (
    <div>
      {selectedProducts.map((product) => (
        <Marcas key={product.id} data={product} />
      ))}
    </div>
  );
}
export default MarcasContainer
