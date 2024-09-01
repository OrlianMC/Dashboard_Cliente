// import React, { useState } from 'react'
import "./person.css"
import PersonTable from "../../components/persontable/Persontable"

const Person = () => {

  return (
    <div className='person'>
      <div className="personContainer">
        <div className="personList">
          <div className="datatableTitle">
            <span>Añadir Persona</span>
            <a href='http://localhost:5173/persona/crear/' className="link">AÑADIR</a>
          </div>
          <hr />
          <div className="table">
            <PersonTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person