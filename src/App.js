import React from 'react';
import CafeMenu from './components/CafeMenu';
import AnimatedButton from './components/AnimatedButton';
import FadeInComponent from './components/FadeInComponent';
import './App.css';

function App() {
  return (
    <div className="container">
      <FadeInComponent />
      <CafeMenu />
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <AnimatedButton />
      </div>
    </div>
  );
}

export default App;