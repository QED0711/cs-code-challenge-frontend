import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlotContainer from './components/PlotContainer';

function App() {
  return (
    <div className="App">
      <PlotContainer feature={'total_in_state'} />
    </div>
  );
}

export default App;
