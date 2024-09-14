import React from 'react'
import { useLocation } from 'react-router-dom';
import CountryForm from "../../components/forms/countryForm/CountryForm"
import "./countryupdate.css"

const CountryUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
    codigo: '',
  };

  return (
    <div className='country-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Área:</h1>
      </div>
      <div className="form">
        <CountryForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default CountryUpdate