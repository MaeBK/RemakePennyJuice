
import { Route, Routes } from "react-router-dom";
import './App.css';
import Aboutus from "./components/Aboutus";
import Product from "./components/Product";
import GetInTouch from "./components/GetInTouch";
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Contact from "./components/Contact"




function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Home" element= {<Home />} />
      <Route path="/About" element= {<Aboutus />} />
      <Route path="/Product" element= {<Product />} />
      <Route path="/Contact" element= {<Contact />} />
    </Routes>

    </>
  );
}

export default App;
