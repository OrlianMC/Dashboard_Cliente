// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import TutorTable from "../../components/tables/tutortable/Tutortable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./tutor.css"

const Tutor = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/tutor/crear/`);
  };

  return (
    <div className='tutor'>
      <div className="tutorContainer">
        <div className="tutorList">
          <div className="datatableTitle">
            <span>Añadir Tutor</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <TutorTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tutor