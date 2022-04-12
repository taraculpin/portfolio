import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Components/Projects';
import Articles from './Components/Articles';
import About from './Components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
          <img src={logo} className="logo-image" alt="Logo" />
          <ul>
            <li><Link to="/" className="item">Projects</Link></li>
            <li><Link to="articles" className="item">Articles</Link></li>
            <li><Link to="about" className="item">About</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="articles" element={<Articles />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
