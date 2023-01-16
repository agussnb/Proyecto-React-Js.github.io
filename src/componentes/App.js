import '../App.css';
import { BrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';






function App() {
  return (
 <BrowserRouter>
 <Navbar />
 <Header/>
 <Main/>
 <Footer/>
 </BrowserRouter>
  );
}


export default App


