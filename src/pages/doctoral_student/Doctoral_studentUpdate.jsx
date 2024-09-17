import React from 'react'
import { useLocation } from 'react-router-dom';
import Doctoral_studentForm from "../../components/forms/doctoral_studentForm/Doctoral_studentForm"
import "./doctoral_studentupdate.css"

const Doctoral_studentUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    fdefensa: '',
    fingreso: '',
    temadetesis: '',
    fingles: '',
    fespecialidad: '',
    desarrollolocal: '',
    persona_idpersona: '',
    facultadarea_idarea: '',
    programa_idprograma: '',
    sectorest_idsectorest: '',
  };

  return (
    <div className='doctoral_student-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Doctorando:</h1>
      </div>
      <div className="form">
        <Doctoral_studentForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default Doctoral_studentUpdate