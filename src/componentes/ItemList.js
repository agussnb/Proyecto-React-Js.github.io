import React from 'react'
import Item from './Item'
const ItemList = ({productos, onSelectProduct}) => {
 productos = [{id:"RaquetaWilson",title:"Raqueta Wilson",price:'90.000',description:"Raqueta Wilson Blade 98 V7",categoryId:1},
    {id:"RaquetaHead",title:"Raqueta Head",price:'88.300', description:"Raqueta Head Gravity MP Lite",categoryId:2},
    {id:"RaquetaBabolat",title:"Raqueta Babolat",price:'99.999', description:"Raqueta Babolat Pure Aero Rafa",categoryId:3},
    {id:"TuboWilson",title:"Tubo de pelotas Wilson",price:'4.799',description:"Tubo de pelotas Wilson Triniti",categoryId:1},
    {id:"TuboHead",title:"Tubo de pelotas Head",price:'3.000',description:"Tubo de pelotas Head Tour y Tour XT",categoryId:2},
    {id:"TuboBabolat",title:"Tubo de pelotas Babolat",price:'3.300',description:"Tubo de pelotas Babolat Team",categoryId:3},
    {id:"RaqueteroWilson",title:"Raquetero Wilson",price:'95.500', description:"Raquetero Wilson DNA Federer",categoryId:1},
    {id:"RaqueteroHead",title:"Raquetero Head",price:'2.000',description:"Raquetero Head Elite All Court",categoryId:2},
    {id:"RaqueteroBabolat",title:"Raquetero Babolat",price:'54.999',description:"Raquetero Babolat RH6 Pure Drive",categoryId:3},
    {id:"CestoWilson",title:"Cesto Wilson",price:'32.000',description:"Cesto para pelotas Wilson",categoryId:1},
    {id:"CestoHead",title:"Cesto Head",price:'10.650',description:"Cesto para pelotas con separador Head",categoryId:2},
    {id:"CestoBabolat",title:"Cesto Babolat",price:'15.800',description:"Cesto para pelotas Babolat Ball Bag",categoryId:3},
    {id:"BolsoWilson",title:"Bolso Wilson ",price:'28.800',description:"Bolso Clash Small Duffel Wilson",categoryId:1},
    {id:"BolsoHead",title:"Bolso Head",price:'42.600',description:"Bolso Coco Duffle Bag",categoryId:2},
    {id:"BolsoBabolat",title:" Bolso Babolat",price:'50.000',description:"Bolso Babolat M Pure Drive",categoryId:3},
    {id:"CuerdasWilson",title:"Cuerdas Wilson",price:'78.999',description:"Cuerdas Element 16 Wilson 200m",categoryId:1},
    {id:"CuerdasHead",title:"Cuerdas Head",price:'70.000',description:"Cuerdas Hawk Head 200m",categoryId:2},
    {id:"CuerdasBabolat",title:"Cuerdas Babolat",price:'55.999',description:"Cuerdas RPM Hurricane Babolat 200m",categoryId:3},
    {id:"GripWilson",title:"Grip Wilson",price:'3.099',description:"Sublime Grip Wilson",categoryId:1},
    {id:"GripHead",title:"Grip Head",price:'5.300',description:"Grip Leather Tour Head",categoryId:2},
    {id:"GripBabolat",title:"Grip Babolat",price:'2.799',description:"Grip Syntec Uptake Babolat",categoryId:3}]
  return (
    <div>
    {productos.map((producto) => {
        return (
            <Item producto={producto} key={producto.id} onClick={() => onSelectProduct(producto.id)}/>
        
        )
})}
</div>
  )
}

export default ItemList