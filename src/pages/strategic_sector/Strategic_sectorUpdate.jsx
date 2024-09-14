import React from 'react'
import { useLocation } from 'react-router-dom';
import Strategic_sectorForm from "../../components/forms/strategic_sectorForm/Strategic_sectorForm"
import "./strategic_sectorupdate.css"

const Strategic_sectorUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
  };

  return (
    <div className='strategic_sector-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Sector Estratégico:</h1>
      </div>
      <div className="form">
        <Strategic_sectorForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default Strategic_sectorUpdate