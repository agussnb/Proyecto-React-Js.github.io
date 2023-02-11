import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from './Cart'
import MarcasContainer from "./MarcasContainer"
import Checkout from "./Checkout"
import ReciboCompra from './ReciboCompra'
const Main = () => {
  return (
    <main>
              
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path="/category/:categoryId" element={<MarcasContainer/>}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
              </Routes>
            
    </main>
  )
}

export default Main
