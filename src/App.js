import React from 'react';

import './App.css';
import PlotContainer from './components/PlotContainer';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className="App">
      <PlotContainer
        feature={'total_in_state'}
        mapTitle={"Total locations by state"}
        barTitle={"Total locations"}
      />
      <PlotContainer
        feature={'2010_population'}
        mapTitle={"Average population by zip code"}
        barTitle={"Average population by location"}
      />
      <PlotContainer
        feature={'median_age'}
        mapTitle={"Average median age by zip code"}
        barTitle={"Average median age by location"}
      />
      <PlotContainer
        feature={'total_income'}
        mapTitle={"Average household income by zip code"}
        barTitle={"Average household income by location"}
      />
      <PlotContainer
        feature={'num_dependents'}
        mapTitle={"Average number dependents by zip code"}
        barTitle={"Average number dependents by location"}
      />
      <PlotContainer
        feature={'num_unemployed'}
        mapTitle={"Average unemployment by zip code"}
        barTitle={"Average unemployment by location"}
      />
      <Conclusion />
    </div>
  );
}

export default App;
