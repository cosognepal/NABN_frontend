import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/AboutUs.jsx"
import Events from "./pages/Events.jsx"
import Team from "./pages/Team.jsx"
import Contact from "./pages/Contact.jsx"
import Donate from "./pages/Donate.jsx"
import './index.css'
import React, { useEffect } from 'react';



function App() {

  useEffect(() => {
    document.title = 'NABN';
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} /> 
          <Route path="/Events" element={<Events />} />
          <Route path="/Team" element={<Team />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/Donate" element={<Donate />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
