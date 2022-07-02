import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Enter from './pages/Enter.jsx'; 
import Dashboard from './pages/Dashboard.jsx'; 

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
