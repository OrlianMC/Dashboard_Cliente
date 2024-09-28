import React from 'react'
import { useLocation } from 'react-router-dom';
import "./registerupdate.css"
import RegisteraForm from "../../components/forms/registerForm/RegisterForm"

// const dataToEdit = {
//   nombre: 'Juan',
//   apellido: 'Pérez',
//   sexo: 'Masculino',
//   plantillaarea_idarea: 'Facultad 4',
//   pais_idpais: 'Cuba',
//   centro_idcentro: 'Universidad de las Ciencias Informáticas',
//   sectorest_idsectorest: 'Tecnologías',
// };

const RegisterUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    username: '',
    password: '',
    email: '',
  };

  return (
    <div className='register-update'>
      <div className='title-container'>
        <h1 className="title">Modificar Usuario:</h1>
      </div>
      <div className="form">
        <RegisteraForm initialData={dataToEdit} />
      </div>
    </div>
  )
}

export default RegisterUpdate