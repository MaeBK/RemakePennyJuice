import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

import { Route, Routes } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <>
    <h1>You're a Nerd.</h1>
    <Nav />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} /> 
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} /> 
    </Routes>
    </>
  );
}

export default App;
