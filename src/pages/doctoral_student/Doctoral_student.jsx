// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import Doctoral_studentTable from "../../components/tables/doctoral_studenttable/Doctoral_studenttable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./doctoral_student.css"

const Doctoral_student = () => {
  
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate(`/doctorando/crear/`);
  };

  return (
    <div className='doctoral_student'>
      <div className="doctoral_studentContainer">
        <div className="doctoral_studentList">
          <div className="datatableTitle">
            <span>Añadir Doctorando</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <Doctoral_studentTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctoral_student