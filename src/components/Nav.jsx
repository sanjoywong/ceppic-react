import {Link, Outlet} from "react-router-dom";
import "./Nav.css";
export default function Nav() {
    return (
        <>
        <nav className="nav">
        <Link to="/home">Home</Link>     
        <Link to="/about">Abfout</Link>          
        <Link to="/contact">Contact</Link>
        <Link to="/listeContacts">Affichier les message</Link>
      </nav>
      <Outlet />
      </>
    );
};
