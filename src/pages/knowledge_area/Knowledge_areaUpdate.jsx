import React from 'react'
import { useLocation } from 'react-router-dom';
import Knowledge_areaForm from "../../components/forms/knowledge_areaForm/Knowledge_areaForm"
import "./knowledge_areaUpdate.css"

const Knowledge_areaUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
  };

  return (
    <div className='knowledge_area-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Área de Conocimiento:</h1>
      </div>
      <div className="form">
        <Knowledge_areaForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default Knowledge_areaUpdate