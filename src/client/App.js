import './App.css';
import React from 'react';
import NavBar from './NavBar.js';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.js';
import Merch from './pages/Merch.js';
import Login from './pages/Login.js';
import About from './pages/About.js';
import TechnicalProjects from './pages/TechnicalProjects.js';
import Footer from './Footer.js';
import AlumNetwork from './pages/AlumNetwork.js';
import Initiatives from './pages/Initiatives.js';
import EBoard from './pages/EBoard.js';
import Sponsors from './pages/Sponsors.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/merch" element={<Merch />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/alumnet" element={<AlumNetwork/>}/>
          <Route path="/techpage" element={<TechnicalProjects />}/>
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/eboard" element={<EBoard />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
