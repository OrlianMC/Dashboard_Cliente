import React from 'react'
import CenterForm from "../../components/forms/centerForm/CenterForm"
import "./centercreate.css"

const CenterCreate = () => {
    return (
        <div className='center-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Centro:</h1>
            </div>
            <div className="form">
                <CenterForm />
            </div>
        </div>
    )
}

export default CenterCreate