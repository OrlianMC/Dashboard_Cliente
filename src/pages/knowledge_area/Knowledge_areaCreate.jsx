import React from 'react'
import Knowledge_areaForm from "../../components/forms/knowledge_areaForm/Knowledge_areaForm"
import "./knowledge_areacreate.css"

const Knowledge_areaCreate = () => {
    return (
        <div className='knowledge_area-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Área de Conocimiento:</h1>
            </div>
            <div className="form">
                <Knowledge_areaForm />
            </div>
        </div>
    )
}

export default Knowledge_areaCreate