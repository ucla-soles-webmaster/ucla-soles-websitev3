import './App.css';
import NavBar from './NavBar.js';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.js';
import Merch from './pages/Merch.js';
import Login from './pages/Login.js';
import About from './pages/About.js';
import TechnicalProjects from './pages/TechnicalProjects.js';
import Footer from './Footer.js';
import AlumNetwork from './pages/AlumNetwork.js';
import PhotoAlbum from './pages/PhotoAlbum.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/merch" element={<Merch />}/>
          <Route path="/photoalbum" element={<PhotoAlbum/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/alumnetwork" element={<AlumNetwork/>}/>
          <Route path="/techpage" element={<TechnicalProjects />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
