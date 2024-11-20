import React from 'react'
import { useLocation } from 'react-router-dom';
import AreaForm from "../../components/forms/areaForm/AreaForm"
import "./areaupdate.css"

const AreaUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
    codigo: '',
  };

  return (
    <div className='area-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Área:</h1>
      </div>
      <div className="form">
        <AreaForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default AreaUpdate