import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles.css";

export default function Navbar(){
    return (
        <>
        <h1 className="free-ship">Free Shipping Nationwide</h1>
    <nav className="nav">
        <Link to ="/Home" className="site-title">
            <img src="../../images-2/navLogo2.png" 
                 alt ="Penny Juice Logo" 
                 width="100px"
                 height="80px"></img>
        </Link>
        <ul>
            <CustomLink  to="/Home">Home</CustomLink>
            <CustomLink  to="/About">About</CustomLink>
            <CustomLink  to="/Product">Product</CustomLink>
            <CustomLink  to="/Contact">Contact</CustomLink>

        </ul>
    </nav>
    </>
    )
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