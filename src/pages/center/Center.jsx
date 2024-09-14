// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import CenterTable from "../../components/tables/centertable/Centertable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./center.css"

const Center = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/centro/crear/`);
  };

  return (
    <div className='center'>
      <div className="centerContainer">
        <div className="centerList">
          <div className="datatableTitle">
            <span>Añadir Centro</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <CenterTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Center