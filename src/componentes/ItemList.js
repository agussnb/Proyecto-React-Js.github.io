import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    productos = [{id:"raquetaWilson",title:"Raqueta Wilson",price:'90.000',description:"Raqueta Wilson Blade 98 V7"},
    {id:"raquetaHead",title:"Raqueta Head",price:'88.300', description:"Raqueta Head Gravity MP Lite"},
    {id:"raquetaBabolat",title:"Raqueta Babolat",price:'99.999', description:"Raqueta Babolat Pure Aero Rafa"},
    {id:"tuboWilson",title:"Tubo de pelotas Wilson",price:'4.799',description:"Tubo de pelotas Wilson Triniti"},
    {id:"tuboHead",title:"Tubo de pelotas Head",price:'3.000',description:"Tubo de pelotas Head Tour y Tour XT"},
    {id:"tuboBabolat",title:"Tubo de pelotas Babolat",price:'3.300',description:"Tubo de pelotas Babolat Team"},
    {id:"raqueteroWilson",title:"Raquetero Wilson",price:'95.500', description:"Raquetero Wilson DNA Federer"},
    {id:"raqueteroHead",title:"Raquetero Head",price:'2.000',description:"Raquetero Head Elite All Court"},
    {id:"raqueteroBabolat",title:"Raquetero Babolat",price:'54.999',description:"Raquetero Babolat RH6 Pure Drive"},
    {id:"cestoWilson",title:"Cesto Wilson",price:'32.000',description:"Cesto para pelotas Wilson"},
    {id:"cestoHead",title:"Cesto Head",price:'10.650',description:"Cesto para pelotas con separador Head"},
    {id:"cestoBabolat",title:"Cesto Babolat",price:'15.800',description:"Cesto para pelotas Babolat Ball Bag"},
    {id:"bolsoWilson",title:"Bolso Wilson ",price:'28.800',description:"Bolso Clash Small Duffel Wilson"},
    {id:"bolsoHead",title:"Bolso Head",price:'42.600',description:"Bolso Coco Duffle Bag"},
    {id:"bolsoBabolat",title:" Bolso Babolat",price:'50.000',description:"Bolso Babolat M Pure Drive"},
    {id:"cuerdasWilson",title:"Cuerdas Wilson",price:'78.999',description:"Cuerdas Element 16 Wilson 200m"},
    {id:"cuerdasHead",title:"Cuerdas Head",price:'70.000',description:"Cuerdas Hawk Head 200m"},
    {id:"cuerdasBabolat",title:"Cuerdas Babolat",price:'55.999',description:"Cuerdas RPM Hurricane Babolat 200m"},
    {id:"gripWilson",title:"Grip Wilson",price:'3.099',description:"Sublime Grip Wilson"},
    {id:"gripHead",title:"Grip Head",price:'5.300',description:"Grip Leather Tour Head"},
    {id:"gripBabolat",title:"Grip Babolat",price:'2.799',description:"Grip Syntec Uptake Babolat"}]
  return (
    <div>
        {productos.map((producto) => {
            return (
                <Item producto={producto} key={producto.id}/>
            
            )
    })}
</div>
  )
}

export default ItemList