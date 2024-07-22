import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={Main}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
