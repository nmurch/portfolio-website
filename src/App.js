import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/projects' Component={Projects}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
