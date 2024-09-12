import React from 'react'
import AreaForm from "../../components/forms/areaForm/AreaForm"
import "./areacreate.css"

const AreaCreate = () => {
    return (
        <div className='area-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Área:</h1>
            </div>
            <div className="form">
                <AreaForm />
            </div>
        </div>
    )
}

export default AreaCreate