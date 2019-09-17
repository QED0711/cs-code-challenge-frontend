import React from 'react';

import Locations from './contentComponents/Locations'
import Population from './contentComponents/Population'
import Age from './contentComponents/Age'
import Income from './contentComponents/Income'
import Dependents from './contentComponents/Dependents'
import Unemployed from './contentComponents/Unemployed'

const ContentContainer = ({ feature }) => {

    return(
        <div className="content-container">
            {
                feature === 'total_in_state'
                &&
                <Locations />
            }
            {
                feature === '2010_population'
                &&
                <Population />
            }
            {
                feature === 'median_age'
                &&
                <Age />
            }
            {
                feature === 'total_income'
                &&
                <Income />
            }
            {
                feature === 'num_dependents'
                &&
                <Dependents />
            }
            {
                feature === 'num_unemployed'
                &&
                <Unemployed />
            }
        </div>
    )

}


export default ContentContainer