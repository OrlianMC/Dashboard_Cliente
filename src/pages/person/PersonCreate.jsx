import React from 'react'
import "./personcreate.css"
import PersonaForm from "../../components/forms/personForm/PersonForm"

const PersonCreate = () => {
    return (
        <div className='person-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Persona:</h1>
            </div>
            <div className="form">
                <PersonaForm />
            </div>
        </div>
    )
}

export default PersonCreate