import logo from './logo.svg';
import './App.css';
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Contact from "./Screens/Contact";
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  
  return (
    <div className="Proyecto REACT">
      <Navbar />
      <Home />
      <Services />
      <HowWeWork />
      <Contact />
      
    </div>
  );
}

export default App;
