import '../App.css';
import { BrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';




function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Main>
 <ItemListContainer/>
 </Main>
 <Footer/>
 </BrowserRouter>
  );
}


export default App


