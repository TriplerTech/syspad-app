import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Enter from './pages/Enter.jsx'; 
import Dashboard from './pages/Dashboard.jsx'; 
import Launchpad_Single from './pages/Launchpad_Single';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="launchpad_single" element={<Launchpad_Single />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
