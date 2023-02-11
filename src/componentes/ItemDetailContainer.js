import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
const { id } = useParams();
const [selectedProduct, setSelectedProduct] = useState(null);

useEffect(() => {
const fetchData = async () => {
toast.info("Cargando producto...", {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
try {
  const response = await fetch("/productos.json");
  const productos = await response.json();
  const product = productos.find((p) => p.id === id);
  setSelectedProduct(product);
  toast.dismiss();
  toast.success("Producto cargado", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
} catch (error) {
  toast.dismiss();
  toast.error("Error al cargar producto", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  console.error(error);
}
};

fetchData();
}, [id]);

if (!selectedProduct) {
return <p>Cargando...</p>;
}

return <ItemDetail key={selectedProduct.id} data={selectedProduct} />;
};

export default ItemDetailContainer;