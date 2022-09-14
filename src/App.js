import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CakeContainer from './components/CakeContainer';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import './index.css';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div className="App">

        <div className="navbar">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cakes" element={<CakeContainer />} exact/>
          <Route path="/about" element={<About />} exact/>
        </Routes>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  
  );
}

