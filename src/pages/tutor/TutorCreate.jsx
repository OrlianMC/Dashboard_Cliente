import React from 'react'
import TutorForm from "../../components/forms/tutorForm/TutorForm"
import "./tutorcreate.css"

const TutorCreate = () => {
    return (
        <div className='tutor-create'>
            <div className='title-container'>
                <h1 className="title">Añadir Tutor:</h1>
            </div>
            <div className="form">
                <TutorForm />
            </div>
        </div>
    )
}

export default TutorCreate