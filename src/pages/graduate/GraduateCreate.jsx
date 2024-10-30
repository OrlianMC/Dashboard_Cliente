import React from 'react'
import "./graduatecreate.css"
import GraduateForm from "../../components/forms/graduateForm/GraduateForm"

const GraduateCreate = () => {
    return (
        <div className='graduate-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Graduado:</h1>
            </div>
            <div className="form">
                <GraduateForm />
            </div>
        </div>
    )
}

export default GraduateCreate