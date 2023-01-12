import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Card from "./Card"
import Wilson from "./Wilson"
import Head from "./Head"
import Babolat from "./Babolat"
import RaquetaWilson from "./RaquetaWilson"

const Main = () => {
  return (
    <main>
            <Routes>
                  <Route path="/Home" element={<ItemListContainer/>}></Route>
                  <Route path="/Productos" element={<Card/>}></Route>
                  <Route path="/Wilson" element={<Wilson/>}></Route>
                  <Route path="/Head" element={<Head/>}></Route>
                  <Route path="/Babolat" element={<Babolat/>}></Route>
                  <Route path="/Productos/raquetaWilson" element={<RaquetaWilson/>}></Route>
            </Routes>
    </main>
  )
}

export default Main

/*    <h1 className="h1Main">Pro Tennis Equipment</h1>
        <h2>Lista de productos</h2> */