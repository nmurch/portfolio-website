import React from 'react';
import './App.css';
import Navbar from './components/TempNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
