import React from 'react';

const Intro = () => {

    return (
        <div className="intro">
            <p>
                The following analysis looks into location and regional demographic data for <strong>six real estate companies</strong> offering apartments across the United States. Each section begins with a summary of the findings, followed by two interactive graphs.
            </p>

            <p>
                Mouse over the <strong>map</strong> to see specific values for each state. You can change which company's data is displayed on the map by <strong>clicking their name</strong> below the chart. The <strong>bar plot</strong> provides national averages for each company, and can also be moused over for additional information.
            </p>

            <p>
                <em>Additional demographic and zip code data has been sourced from the <a href="https://blog-splitwise-com.cdn.ampproject.org/v/s/blog.splitwise.com/2013/09/18/the-2010-us-census-population-by-zip-code-totally-free/amp/?usqp=mq331AQEKAFwAQ%3D%3D&amp_js_v=0.1#aoh=15686713597429&referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s&ampshare=https%3A%2F%2Fblog.splitwise.com%2F2013%2F09%2F18%2Fthe-2010-us-census-population-by-zip-code-totally-free%2F" target="_blank">2010 United States census</a>, and <a href="https://www.irs.gov/statistics/soi-tax-stats-individual-income-tax-statistics-2016-zip-code-data-soi" target="_blank">tax return</a> information provided by the IRS.</em>
            </p>
        </div>
    )

}

export default Intro;