import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Portfolio from './pages/portfolio/Portfolio';
import BlobCursor from './components/BlobCursor';

function App() {
  return (
    <>
      <BlobCursor
        blobType="blob"
        fillColor="#F97316"
        trailCount={3}
        sizes={[20, 40, 60]}
        innerSizes={[8, 16, 24]}
        innerColor="rgba(255,255,255,0.9)"
        opacities={[0.8, 0.6, 0.4]}
        shadowColor="rgba(249, 115, 22, 0.3)"
        shadowBlur={8}
        shadowOffsetX={2}
        shadowOffsetY={2}
        filterStdDeviation={15}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.3}
        zIndex={9999}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
