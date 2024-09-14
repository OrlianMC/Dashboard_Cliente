import React from 'react'
import { useLocation } from 'react-router-dom';
import CenterForm from "../../components/forms/centerForm/CenterForm"
import "./centerupdate.css"

const CenterUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
    organismo: '',
  };

  return (
    <div className='center-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Centro:</h1>
      </div>
      <div className="form">
        <CenterForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default CenterUpdate