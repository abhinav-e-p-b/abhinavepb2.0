import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portfolio/*" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
