import React from 'react';

const Intro = () => {

    return(
        <div className="intro">
            <p>
                The following analysis looks into location and regional demographic data for six real estate companies offering apartments across the United States. Each section begins with a summary of the findings about a specific feature, followed by two interactive graphs. Mouse over the map to see specific values for each state. You can change which company's data is displayed on the map by clicking their name below the chart. The bar plot provides national averages for each company, and can also be moused over for additional information. 
            </p>

            <p>
                <em>Additional demographic and zip code data has been sourced from the <a href="#">2010 United States census</a>, and <a href="#">tax return</a> information provided by the IRS.</em> 
            </p>
        </div>
    )

}

export default Intro;