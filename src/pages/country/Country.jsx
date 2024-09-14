// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import CountryTable from "../../components/tables/countrytable/Countrytable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import "./country.css"

const Country = () => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/pais/crear/`);
  };

  return (
    <div className='country'>
      <div className="countryContainer">
        <div className="countryList">
          <div className="datatableTitle">
            <span>Añadir País</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <CountryTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country