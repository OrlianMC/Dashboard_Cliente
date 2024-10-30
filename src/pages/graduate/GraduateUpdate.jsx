import React from 'react'
import { useLocation } from 'react-router-dom';
import "./graduateupdate.css"
import GraduateForm from "../../components/forms/graduateForm/GraduateForm"

const GraduateUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    fechadefensa: '',
    persona_idpersona: '',
    facultadarea_idarea: '',
    areadeconocimiento_idareadeconocimiento: '', 
  };

  return (
    <div className='graduate-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Graduado:</h1>
      </div>
      <div className="form">
        <GraduateForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default GraduateUpdate