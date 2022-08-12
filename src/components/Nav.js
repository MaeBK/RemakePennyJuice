import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
   
        return (
    <nav className="nav">
        <Link to ="/Home" className="site-title">
            <img src="./images/logo.webloc" alt ="Penny Juice Logo"></img>
        </Link>
        <ul>
            <CustomLink  to="/Home">Home</CustomLink>
            <CustomLink  to="/Aboutus">Aboutus</CustomLink>
            <CustomLink  to="/Product">Product</CustomLink>
            <CustomLink  to="/Contact">Contact</CustomLink>
        </ul>
    </nav>
         
        );
    }
