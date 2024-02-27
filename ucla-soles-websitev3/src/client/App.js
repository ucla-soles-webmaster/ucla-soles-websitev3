import './App.css';
import NavBar from './NavBar';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';
import TechnicalProjects from './pages/TechnicalProjects';

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
