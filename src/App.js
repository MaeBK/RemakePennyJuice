import Aboutus from "./components/Aboutus";
import Product from "./components/Product";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
// import './App.css';

import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/Contact"


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/Home" element= {<Home />} />
      <Route path="/About" element= {<About />} />
      <Route path="/Product" element= {<Product />} />
      <Route path="/Contact" element= {<Contact />} />
    </Routes>

    </>
  );
}

export default App;
