import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Enter from './pages/Enter.jsx'; 
import Home from './pages/Home.jsx'; 
import Stake from './pages/Stake.jsx';
import Launchpad_Single from './pages/Launchpad_Single';
import Kyc from './pages/Kyc';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="home" element={<Home />} />
        <Route path="stake" element={<Stake />} />
        <Route path="launchpad_single" element={<Launchpad_Single />} />
        <Route path="kyc" element={<Kyc />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
