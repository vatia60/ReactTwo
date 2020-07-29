import React from 'react';
import logo from './logo.svg';
import './App.css';
import Setstate from './components/Setstate'
import Conditionone from './components/Conditionone'
import Forceupdate from './components/Forceupdate';

function App() {
  return (
    <div className="App">
      <Setstate />
      <Conditionone />
      <Forceupdate />
    </div>
  );
}

export default App;
