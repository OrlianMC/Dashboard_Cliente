import React from 'react'
import RegisterForm from "../../components/forms/registerForm/RegisterForm"
import "./registercreate.css"

const RegisterCreate = () => {
    return (
        <div className='register-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Usuario:</h1>
            </div>
            <div className="form">
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterCreate