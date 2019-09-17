import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlotContainer from './components/PlotContainer';

function App() {
  return (
    <div className="App">
      <PlotContainer feature={'total_in_state'} />
      <PlotContainer feature={'2010_population'} />
      <PlotContainer feature={'total_income'} />
      <PlotContainer feature={'num_unemployed'} />
      <PlotContainer feature={'num_dependents'} />
      <PlotContainer feature={'median_age'} />
    </div>
  );
}

export default App;
