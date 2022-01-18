import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/Navibar';

import { Routes, Route } from "react-router-dom";

import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Contacts } from './components/Contacts';
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NaviBar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/skills" element={<Skills/>} />
        <Route  path="/services" element={<Services/>} />
        <Route  path="/contacts" element={<Contacts/>} />
      </Routes>
      <Footer />
  </>
  );
}

export default App;
