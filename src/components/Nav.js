import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles.css";

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
    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return (
            <li className= {isActive ? "active" : ""}>
                <Link to ={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }