import { useContext } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from "./../../authContext/authContext";
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { postSesionLogout } from '../../api/sesion_api';
import "./navbar.css";

const role_currencies = [
    { value: 'admin', label: 'Administrador' },
    { value: 'manager', label: 'Gerente' },
    { value: 'user', label: 'Usuario' }
  ];

const Navbar = () => {
    const { state, dispatch } = useContext(AuthContext);
    const { role, user, tokenAccess} = state;
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await postSesionLogout(tokenAccess);
        localStorage.removeItem('tokenAccess');
        localStorage.removeItem('tokenRefresh');
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        dispatch({ type: 'LOGOUT' });
        navigate('/login');
      };

    return (
        <div className='navbar'>
            <div className="navbarContainer">

                <div className="items">

                    <div className="item">
                        <AccountCircleIcon  className="icon"/>
                    </div>

                    <div className="item">
                        {user && role ? `${user} (${role_currencies.find(item => item.value === role)?.label || 'N/A'})` : "Invitado"}
                    </div>

                    <div className="item">
                        <Button className='buttom' onClick={handleLogout}>
                            <LogoutIcon  className="icon"/>
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar