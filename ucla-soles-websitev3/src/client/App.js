import './App.css';
import NavBar from './NavBar.js';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Login from './pages/Login.js';
import About from './pages/About.js';
import TechnicalProjects from './pages/TechnicalProjects.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/techpage" element={<TechnicalProjects />}/>
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
