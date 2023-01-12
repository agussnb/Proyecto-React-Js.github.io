import '../App.css';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Card from './Card'
import ItemListContainer from './ItemListContainer';




function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Main/>
 <Footer/>
 <ItemListContainer/>
 </BrowserRouter>
  );
}


export default App


