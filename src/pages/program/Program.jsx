// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import ProgramTable from "../../components/tables/programtable/Programtable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./program.css"

const Program = () => {
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/programa/crear/`);
  };

  return (
    <div className='program'>
      <div className="programContainer">
        <div className="programList">
          <div className="datatableTitle">
            <span>Añadir Programa</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <ProgramTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program