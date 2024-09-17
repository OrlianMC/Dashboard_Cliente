// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import DoctorTable from "../../components/tables/doctortable/Doctortable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./doctor.css"

const Doctor = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/doctor/crear/`);
  };

  return (
    <div className='doctor'>
      <div className="doctorContainer">
        <div className="doctorList">
          <div className="datatableTitle">
            <span>Añadir Doctor</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <DoctorTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor