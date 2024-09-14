import React from 'react'
import { useLocation } from 'react-router-dom';
import ProgramForm from "../../components/forms/programForm/ProgramForm"
import "./programupdate.css"

// const dataToEdit = {
//   nombre: 'Juan',
//   apellido: 'Pérez',
//   sexo: 'Masculino',
//   plantillaarea_idarea: 'Facultad 4',
//   pais_idpais: 'Cuba',
//   centro_idcentro: 'Universidad de las Ciencias Informáticas',
//   sectorest_idsectorest: 'Tecnologías',
// };

const ProgramUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
    sectorest: '',
    desarrollolocal: '',
    adistancia: '',
    estdesarrollomun: '',
    area_idarea: '',
    areadeconocimiento_idareadeconocimiento: '',
  };

  return (
    <div className='program-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Programa:</h1>
      </div>
      <div className="form">
        <ProgramForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default ProgramUpdate