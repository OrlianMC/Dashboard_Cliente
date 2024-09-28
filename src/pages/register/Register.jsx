// import React, { useNavigate } from 'react'
import { useNavigate } from 'react-router-dom';
import "./register.css"
import RegisterTable from "../../components/tables/registertable/Registertable"
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Register = () => {
  
  
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/register/crear/`);
  };

  return (
    <div className='register'>
      <div className="registerContainer">
        <div className="registerList">
          <div className="datatableTitle">
            <span>Añadir Usuario</span>
            <Button className='buttom' type="button" onClick={handleNavigate}>
              <AddIcon/>
            </Button>
          </div>
          <hr />
          <div className="table">
            <RegisterTable />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register