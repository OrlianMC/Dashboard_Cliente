import React from 'react'
import { useLocation } from 'react-router-dom';
import TutorForm from "../../components/forms/tutorForm/TutorForm"
import "./tutorupdate.css"

const TutorUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    persona_idpersona: '',
    facultadarea_idarea: '',
  };

  return (
    <div className='tutor-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Tutor:</h1>
      </div>
      <div className="form">
        <TutorForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default TutorUpdate