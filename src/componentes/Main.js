import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from './Cart'
import MarcasContainer from "./MarcasContainer"
import { useContext } from "react"

//export const CartContext = React.createContext('');

//<CartContext.Provider value=""></CartContext.Provider>
const Main = () => {
  return (
    <main>
              
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}></Route>
                    <Route path="/category/:categoryId" element={<MarcasContainer/>}></Route>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                    <Route path="/carrito" element={<Cart/>}></Route>
              </Routes>
            
    </main>
  )
}

export default Main

{/* <Route path="/Wilson" element={<Wilson/>}></Route>
<Route path="/Head" element={<Head/>}></Route>
<Route path="/Babolat" element={<Babolat/>}></Route>
<Route path="/Productos/raquetaWilson" element={<RaquetaWilson/>}></Route>
<Route path="/Productos/raquetaHead" element={<RaquetaHead/>}></Route> */}