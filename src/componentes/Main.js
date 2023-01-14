import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Card from "./Card"
import ItemDetailContainer from "./ItemDetailContainer"


const Main = () => {
  return (
    <main>
            <Routes>
                  <Route path="/" element={<ItemListContainer/>}></Route>
                  <Route path="/Productos/:categoria" element={<Card/>}></Route>
                  <Route path="/category/:id" element={<ItemListContainer/>}></Route>
                  <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
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