import React from 'react'
import Doctoral_studentForm from "../../components/forms/doctoral_studentForm/Doctoral_studentForm"
import "./doctoral_studentcreate.css"

const Doctoral_studentCreate = () => {
    return (
        <div className='doctoral_student-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Doctorando:</h1>
            </div>
            <div className="form">
                <Doctoral_studentForm />
            </div>
        </div>
    )
}

export default Doctoral_studentCreate