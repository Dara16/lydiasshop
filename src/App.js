import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import CakeContainer from './components/CakeContainer';
import HomePage from './components/HomePage';
import './index.css';

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
        </Routes>
      </div>
    </Router>
  
  );
}

