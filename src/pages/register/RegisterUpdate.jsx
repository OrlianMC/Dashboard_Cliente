import React from 'react'
import { useLocation } from 'react-router-dom';
import "./registerupdate.css"
import RegisteraForm from "../../components/forms/registerForm/RegisterForm"

const RegisterUpdate = () => {
  const location = useLocation();
  const dataToEdit = location.state?.row || {
    username: '',
    password: '',
    email: '',
    role: '',
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