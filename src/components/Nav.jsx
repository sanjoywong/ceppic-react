import {Link} from "react-router-dom";
import "./Nav.css"
export default function Nav() {
    return (
        <>
        <nav>
        <Link to="/home">Home</Link>     
        <Link to="/about">Abfout</Link>          
        <Link to="/contact">Contact</Link>
      </nav>
      </>
    );
};
