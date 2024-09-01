import React from 'react'
import { useLocation } from 'react-router-dom';
import "./personupdate.css"
import PersonaForm from "../../components/forms/personForm/PersonForm"

// const dataToEdit = {
//   nombre: 'Juan',
//   apellido: 'Pérez',
//   sexo: 'Masculino',
//   plantillaarea_idarea: 'Facultad 4',
//   pais_idpais: 'Cuba',
//   centro_idcentro: 'Universidad de las Ciencias Informáticas',
//   sectorest_idsectorest: 'Tecnologías',
// };

const PersonUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    nombre: '',
    apellido: '',
    sexo: '',
    plantillaarea_idarea: '',
    pais_idpais: '',
    centro_idcentro: '',
    sectorest_idsectorest: '',
  };

  return (
    <div className='person-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Persona:</h1>
      </div>
      <div className="form">
        <PersonaForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default PersonUpdate