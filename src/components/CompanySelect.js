import React from 'react';

const CompanySelect = ({ companies, currentComp, setCurrentComp }) => {

    const handleClick = (company) => {
        return () => {
            setCurrentComp(company)
        }
    }

    const companyDivs = (companies) => {
        return companies.map((c, i) => {
            return <div key={i} className={`company-selector selected-${c === currentComp}`} onClick={handleClick(c)}>
                {c.replace(' apartments', '')}
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