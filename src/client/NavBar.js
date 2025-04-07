import React, { useState } from "react";
import {Link} from "react-router-dom";
import solesshpe from './photos/solesshpe.png';
import './NavBar.css';
import {ReactComponent as Hamburger} from './icons/burger-menu-svgrepo-com.svg';
const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
  
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={solesshpe} alt="SOLES @ UCLA" height="50" />
          </Link>
  
          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Navbar Items */}
          <div className={`collapse navbar-collapse ${hamburgerOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setHamburgerOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => setHamburgerOpen(false)}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/merch" onClick={() => setHamburgerOpen(false)}>Merch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photoalbum" onClick={() => setHamburgerOpen(false)}>Photo Album</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/initiatives" onClick={() => setHamburgerOpen(false)}>Initiatives</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/techpage" onClick={() => setHamburgerOpen(false)}>Technical Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={() => setHamburgerOpen(false)}>Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '76px' }}></div>
      </>
    );
  };
  
export default NavBar;

// const NavBar = () => {
//     const [hamburgerOpen, setHamburgerOpen] = useState(false);
//     const toggleHamburger = () =>{
//         setHamburgerOpen(!hamburgerOpen)
//     }
    
//     return (
//         <div className="navigation">
//             <nav className="navBar">
//                 <Link to="/" className="home-page"><img src={solesshpe} alt="SOLES @ UCLA" /></Link>
//                 <ul className={hamburgerOpen ? "nav-links show" : "nav-links"}>
//                     <li><Link to="/" className="home-page" onClick={toggleHamburger}>Home</Link></li>
//                     <li><Link to="/about" className="about-page" onClick={toggleHamburger}>About</Link></li>
//                     <li><Link to="/merch" className="merch-page" onClick={toggleHamburger}>Merch</Link></li>
//                     <li><Link to="photoalbum" className="photoalbum-page" onClick={toggleHamburger}>Photo Album</Link></li>
//                     <li><Link to="alumnetwork" className="alumnetwork-page" onClick={toggleHamburger}>Alum Network</Link></li>
//                     <li><Link to="/techpage" className="tech-page" onClick={toggleHamburger}>Technical Projects</Link></li>   
//                     <li><Link to="/login" className="login-page" onClick={toggleHamburger}>Account</Link></li>             
//                 </ul>
//                 <div className="hamburger" onClick={toggleHamburger}>
//                     <Hamburger />
//                 </div>
//             </nav>

//         </div>
//     );
// };

// export default NavBar;