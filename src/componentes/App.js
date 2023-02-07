import '../App.css';
import { BrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import CustomProvider from './CustomProvider';
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'






function App() {
  return (
    <CustomProvider>
        <BrowserRouter>
        <Navbar />
        <Header/>
        <Main/>
        <Footer/>
        </BrowserRouter>
        <ToastContainer/>
    </CustomProvider>
 
  );
}


export default App


