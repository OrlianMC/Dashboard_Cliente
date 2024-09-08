// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import "./person.css"
import PersonTable from "../../components/persontable/Persontable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Person = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/persona/crear/`);
  };

  return (
    <div className='person'>
      <div className="personContainer">
        <div className="personList">
          <div className="datatableTitle">
            <span>Añadir Persona</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
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