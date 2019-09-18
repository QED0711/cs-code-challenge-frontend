import React from 'react';

import './App.css';

// import Zoom from 'react-reveal/Zoom'
// import Reveal from 'react-reveal/Reveal'
// import TransitionGroup from 'react-transition-group/TransitionGroup'

import PlotContainer from './components/PlotContainer';
import Conclusion from './components/Conclusion';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
            <Intro />
        
            <PlotContainer
              feature={'total_in_state'}
              mapTitle={"Total locations by state"}
              barTitle={"Total locations across the US"}
            />

        
            <PlotContainer
              feature={'2010_population'}
              mapTitle={"Average population by zip code"}
              barTitle={"Average population in served communities"}
            />

        
            <PlotContainer
              feature={'median_age'}
              mapTitle={"Average median age by zip code"}
              barTitle={"Average median age in served communities"}
            />


        
            <PlotContainer
              feature={'total_income'}
              mapTitle={"Average household income by zip code"}
              barTitle={"Average household income in served communities"}
            />
        
            <PlotContainer
              feature={'num_dependents'}
              mapTitle={"Average number dependents by zip code"}
              barTitle={"Average number dependents in served communities"}
            />


        
            <PlotContainer
              feature={'num_unemployed'}
              mapTitle={"Average unemployment by zip code"}
              barTitle={"Average unemployment in served communities"}
            />
      
          <Conclusion />

          <Footer />
      </div>
    </div>
  );
}

export default App;
