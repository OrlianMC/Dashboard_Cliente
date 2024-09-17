import React from 'react'
import DoctorForm from "../../components/forms/doctorForm/DoctorForm"
import "./doctorcreate.css"

const DoctorCreate = () => {
    return (
        <div className='doctor-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Doctor:</h1>
            </div>
            <div className="form">
                <DoctorForm />
            </div>
        </div>
    )
}

export default DoctorCreate