import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="home-page">SOLES @ UCLA</Link>
            <ul>
                <li><Link to="/about" className="about-page">About</Link></li>
                <li><Link to="/contact" className="contact-page">Contact</Link></li>
                <li><Link to="/login" className="login-page">Login</Link></li>  
                <li><Link to="/techpage" className="tech-page">Technical Projects</Link></li>               
            </ul>

        </nav>
    );
};

export default NavBar;