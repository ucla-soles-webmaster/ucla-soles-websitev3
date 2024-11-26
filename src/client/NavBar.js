import React, { useState } from "react";
import {Link} from "react-router-dom";
import solesshpe from './photos/solesshpe.png';
import './NavBar.css';
import {ReactComponent as Hamburger} from './icons/burger-menu-svgrepo-com.svg';

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    
    return (
        <div className="navigation">
            <nav className="navBar">
                <Link to="/" className="home-page"><img src={solesshpe} alt="SOLES @ UCLA" /></Link>
                <ul className={hamburgerOpen ? "nav-links show" : "nav-links"}>
                    <li><Link to="/" className="home-page" onClick={toggleHamburger}>Home</Link></li>
                    <li><Link to="/about" className="about-page" onClick={toggleHamburger}>About</Link></li>
                    <li><Link to="/merch" className="merch-page" onClick={toggleHamburger}>Merch</Link></li>
                    <li><Link to="photoalbum" className="photoalbum-page" onClick={toggleHamburger}>Photo Album</Link></li>
                    <li><Link to="alumnetwork" className="alumnetwork-page" onClick={toggleHamburger}>Alum Network</Link></li>
                    <li><Link to="/login" className="login-page" onClick={toggleHamburger}>Login</Link></li>  
                    <li><Link to="/techpage" className="tech-page" onClick={toggleHamburger}>Technical Projects</Link></li>              
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </nav>

        </div>
    );
};

export default NavBar;