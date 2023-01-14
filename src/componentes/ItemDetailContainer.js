
import React from "react"
import ItemDetail from "./ItemDetail"
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"

const productos = [{id:"RaquetaWilson",title:"Raqueta Wilson",price:'90.000',description:"Raqueta Wilson Blade 98 V7",img:"raquetaWilson",categoryId:2},
{id:"RaquetaHead",title:"Raqueta Head",price:'88.300', description:"Raqueta Head Gravity MP Lite",categoryId:3},
{id:"RaquetaBabolat",title:"Raqueta Babolat",price:'99.999', description:"Raqueta Babolat Pure Aero Rafa",categoryId:4},
{id:"TuboWilson",title:"Tubo de pelotas Wilson",price:'4.799',description:"Tubo de pelotas Wilson Triniti",categoryId:2},
{id:"TuboHead",title:"Tubo de pelotas Head",price:'3.000',description:"Tubo de pelotas Head Tour y Tour XT",categoryId:3},
{id:"TuboBabolat",title:"Tubo de pelotas Babolat",price:'3.300',description:"Tubo de pelotas Babolat Team",categoryId:4},
{id:"RaqueteroWilson",title:"Raquetero Wilson",price:'95.500', description:"Raquetero Wilson DNA Federer",categoryId:2},
{id:"RaqueteroHead",title:"Raquetero Head",price:'2.000',description:"Raquetero Head Elite All Court",categoryId:3},
{id:"RaqueteroBabolat",title:"Raquetero Babolat",price:'54.999',description:"Raquetero Babolat RH6 Pure Drive",categoryId:4},
{id:"CestoWilson",title:"Cesto Wilson",price:'32.000',description:"Cesto para pelotas Wilson",categoryId:2},
{id:"CestoHead",title:"Cesto Head",price:'10.650',description:"Cesto para pelotas con separador Head",categoryId:3},
{id:"CestoBabolat",title:"Cesto Babolat",price:'15.800',description:"Cesto para pelotas Babolat Ball Bag",categoryId:4},
{id:"BolsoWilson",title:"Bolso Wilson ",price:'28.800',description:"Bolso Clash Small Duffel Wilson",categoryId:2},
{id:"BolsoHead",title:"Bolso Head",price:'42.600',description:"Bolso Coco Duffle Bag",categoryId:3},
{id:"BolsoBabolat",title:" Bolso Babolat",price:'50.000',description:"Bolso Babolat M Pure Drive",categoryId:4},
{id:"CuerdasWilson",title:"Cuerdas Wilson",price:'78.999',description:"Cuerdas Element 16 Wilson 200m",categoryId:2},
{id:"CuerdasHead",title:"Cuerdas Head",price:'70.000',description:"Cuerdas Hawk Head 200m",categoryId:3},
{id:"CuerdasBabolat",title:"Cuerdas Babolat",price:'55.999',description:"Cuerdas RPM Hurricane Babolat 200m",categoryId:4},
{id:"GripWilson",title:"Grip Wilson",price:'3.099',description:"Sublime Grip Wilson",categoryId:2},
{id:"GripHead",title:"Grip Head",price:'5.300',description:"Grip Leather Tour Head",categoryId:3},
{id:"GripBabolat",title:"Grip Babolat",price:'2.799',description:"Grip Syntec Uptake Babolat",categoryId:4}]
const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {id} = useParams()

  useEffect(() => {
    const selectedProduct = productos.find((producto) => producto.id === id);
    if (selectedProduct) {
      setData(selectedProduct);
    }
  }, [id]);

  if (!data) {
    return <p>Producto no encontrado.</p>;
  }
  return <ItemDetail key={data.id} data={data} />;
};





export default ItemDetailContainer






/* const [load, setLoad] = useState(false)
  const [productos, setProductos] = useState([]);
  useEffect(()=>{
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
  }, [])

return (
<div>
 {load ? 'Productos cargados' : 'Cargando...'}
<ItemListDetail productos={productos}/>
</div>

)*/



/*


*/