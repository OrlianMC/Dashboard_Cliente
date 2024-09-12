// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import AreaTable from "../../components/tables/areatable/Areatable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./area.css"

const Area = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/area/crear/`);
  };

  return (
    <div className='area'>
      <div className="areaContainer">
        <div className="areaList">
          <div className="datatableTitle">
            <span>Añadir Área</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <AreaTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Area