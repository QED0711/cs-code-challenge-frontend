import React, { useState } from 'react';
import CompanySelect from './CompanySelect';

const PlotContainer = ({ feature }) => {
    const [currentComp, setCurrentComp] = useState('hillcrest apartments')

    const companies = [
        'courtyard apartments',
        'hillcrest apartments',
        'park place apartments',
        'park view apartments',
        'parkside apartments',
        'riverview apartments',
    ]

    return(
        <div className="plot-container">
            <iframe className="map-iframe" src={`https://qed0711.github.io/CS-code-chellenge/visuals/${currentComp.replace(/\s/g, "_")}-${feature}-map.html`}/>

            <CompanySelect companies={companies} setCurrentComp={setCurrentComp} />
        </div>
    )

}

export default PlotContainer

