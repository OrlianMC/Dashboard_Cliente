import React from 'react'
import CountryForm from "../../components/forms/countryForm/CountryForm"
import "./countrycreate.css"

const CountryCreate = () => {
    return (
        <div className='country-create'>
            <div className='title-container'>
                <h1 className="title">Añadir País:</h1>
            </div>
            <div className="form">
                <CountryForm />
            </div>
        </div>
    )
}

export default CountryCreate