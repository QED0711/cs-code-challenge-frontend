import React from 'react';

const CompanySelect = ({ companies, setCurrentComp }) => {

    const handleClick = (company) => {
        return () => {
            setCurrentComp(company)
        }
    }

    const companyDivs = (companies) => {
        return companies.map((c, i) => {
            return <div key={i} className='company-selector' onClick={handleClick(c)}>
                <p>{c.replace(' apartments', '')}</p>
            </div>
        })
    }

    return(
        <div className="company-select-container">
            {companyDivs(companies)}
        </div>
    )

}

export default CompanySelect;