// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import Knowledge_areaTable from "../../components/tables/knowledge_areatable/Knowledge_areatable";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./knowledge_area.css"

const Knowledge_area = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/areadeconocimiento/crear/`);
  };

  return (
    <div className='knowledge_area'>
      <div className="knowledge_areaContainer">
        <div className="knowledge_areaList">
          <div className="datatableTitle">
            <span>Añadir Área de Conocimiento</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <Knowledge_areaTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge_area