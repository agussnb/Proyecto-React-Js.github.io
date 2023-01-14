import '../App.css';
import { BrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Categorias from './Categorias';




function App() {
 // const categories = Categorias.categories
  return (
 <BrowserRouter>
 <Navbar />
 <Main/>
 <Footer/>
 </BrowserRouter>
  );
}


export default App


