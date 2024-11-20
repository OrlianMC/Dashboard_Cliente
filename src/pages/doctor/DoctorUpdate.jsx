import React from 'react'
import { useLocation } from 'react-router-dom';
import DoctorForm from "../../components/forms/doctorForm/DoctorForm"
import "./doctorupdate.css"

const DoctorUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    persona_idpersona: '',
    facultadarea_idarea: '',
    areadeconocimiento_idareadeconocimiento: '',
  };

  return (
    <div className='doctor-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Doctor:</h1>
      </div>
      <div className="form">
        <DoctorForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default DoctorUpdate