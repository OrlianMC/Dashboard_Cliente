import React from 'react'
import Strategic_sectorForm from "../../components/forms/strategic_sectorForm/Strategic_sectorForm"
import "./strategic_sectorcreate.css"

const Strategic_sectorCreate = () => {
    return (
        <div className='strategic_sector-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Sector Estratégico:</h1>
            </div>
            <div className="form">
                <Strategic_sectorForm />
            </div>
        </div>
    )
}

export default Strategic_sectorCreate