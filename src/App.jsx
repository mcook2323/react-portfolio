import { useState } from 'react'
import About from './componets/About';
import Portfolio from '../src/componets/Portfolio';
import Contact from '../src/componets/Contact';
import Resume from './componets/Resume';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './componets/Footer';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
