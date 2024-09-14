import React from 'react'
import ProgramForm from "../../components/forms/programForm/ProgramForm"
import "./programcreate.css"

const ProgramCreate = () => {
    return (
        <div className='program-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Programa:</h1>
            </div>
            <div className="form">
                <ProgramForm />
            </div>
        </div>
    )
}

export default ProgramCreate