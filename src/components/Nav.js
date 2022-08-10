import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
   
        return (
            
            <div>
              <ul className="nav-links">
                <Link to="/" >Home</Link>
                <Link to="/Aboutus" >About</Link>
                <Link to="/Product" >Products</Link>
                <Link to="/Contact" >Contact</Link>
              </ul>
            </div>
         
        );
    }