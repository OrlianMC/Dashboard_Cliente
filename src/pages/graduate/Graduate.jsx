// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import "./graduate.css"
import GraduateTable from "../../components/tables/graduatetable/Graduatetable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Graduate = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/graduado/crear/`);
  };

  return (
    <div className='graduate'>
      <div className="graduateContainer">
        <div className="graduateList">
          <div className="datatableTitle">
            <span>Añadir Graduado</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <GraduateTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Graduate