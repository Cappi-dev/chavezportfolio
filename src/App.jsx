import React from 'react';
import Home from './pages/Home';
import SmoothScroll from './components/SmoothScroll';
import AuroraBackground from './components/AuroraBackground';

function App() {
  return (
    <SmoothScroll>
      <AuroraBackground />
      <div className="noise-overlay fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03]"></div>
      <Home />
    </SmoothScroll>
  );
}

export default App;
