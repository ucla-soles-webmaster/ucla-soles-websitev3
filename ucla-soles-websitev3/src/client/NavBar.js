import React from "react";
import {Link} from "react-router-dom";
import solesshpe from './photos/solesshpe.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to="/" className="home-page"><img src={solesshpe} alt="SOLES @ UCLA" /></Link>
            <ul>
                <li><Link to="/" className="home-page">Home</Link></li>
                <li><Link to="/about" className="about-page">About</Link></li>
                <li><Link to="/contact" className="contact-page">Contact</Link></li>
                <li><Link to="/login" className="login-page">Login</Link></li>  
                <li><Link to="/techpage" className="tech-page">Technical Projects</Link></li>              
            </ul>

        </nav>
    );
};

export default NavBar;