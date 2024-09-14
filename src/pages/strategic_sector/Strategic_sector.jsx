// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import Strategic_sectorTable from "../../components/tables/strategic_sectortable/Strategic_sectortable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./strategic_sector.css"

const Strategic_sector = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/sectorest/crear/`);
  };

  return (
    <div className='strategic_sector'>
      <div className="strategic_sectorContainer">
        <div className="strategic_sectorList">
          <div className="datatableTitle">
            <span>Añadir Sector Estratégico</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <Strategic_sectorTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Strategic_sector