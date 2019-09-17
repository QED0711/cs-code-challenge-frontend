import React, { useState } from 'react';
import CompanySelect from './CompanySelect';
import ContentContainer from './ContentContainer';

const PlotContainer = ({ feature, mapTitle, barTitle }) => {
    const [currentComp, setCurrentComp] = useState('courtyard apartments')

    const companies = [
        'courtyard apartments',
        'hillcrest apartments',
        'park place apartments',
        'park view apartments',
        'parkside apartments',
        'riverview apartments',
    ]

    return (
        <div className="plot-container">
            <div className="map-container">
                <h3 className="plot-title">{`${mapTitle}: ${currentComp}`}</h3>
                <iframe title={`${currentComp}-${feature}-map`} className="map-iframe" src={`https://qed0711.github.io/CS-code-chellenge/visuals/${currentComp.replace(/\s/g, "_")}-${feature}-map.html`} />

                <CompanySelect companies={companies} setCurrentComp={setCurrentComp} />
            </div>
            
            <div className="barplot-container">
                <h3 className="plot-title">{barTitle}</h3>
                <iframe title={`${feature}-barmap`} className="barplot-iframe" src={`https://qed0711.github.io/CS-code-chellenge/visuals/${feature}-bar.html`} />
            </div>

            <ContentContainer feature={feature}/>
        </div>
    )

}

export default PlotContainer

