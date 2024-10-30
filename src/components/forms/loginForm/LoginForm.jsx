import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Snackbar, Alert } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postSesion } from '../../../api/sesion_api';
import logo from '../../../img/logo_uci.png';
import "./loginForm.css";

export default function LoginForm({ onLoginSuccess }) {
  const initialFormData = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const { setToken } = useContext(DataContext); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!formData.username || !formData.password) {
      return setError('Por favor, completa todos los campos.');
    }
    
    setLoading(true);
    setError('');
    
    try {
      const tokenAcces = await postSesion(formData);
      
      if (tokenAcces && tokenAcces.data && tokenAcces.data.token) {
        setToken(tokenAcces.data.token);
        console.log("Token es: ", tokenAcces.data.token);
        setSuccess(true);
        onLoginSuccess();
      } else {
        setError('Credenciales incorrectas.');
      }
      
      setFormData(initialFormData);
    } catch (error) {
      setError('Ha ocurrido un error durante la autenticación.');
      console.error("Error de autenticación:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => {
    setError('');
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

  return (
    <div className='loginContainer'>
      <img src={logo} alt="Logo" className="logo" />
      <h2 className='h2'> Tablero de Operaciones Dirección de Posgrado: </h2>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': { m: 0.3, width: { xs: '60%', sm: '45vh' }, height: '10ch' },
          alignContent: 'center',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="username"
          label="Usuario"
          variant="outlined"
          className="customTextField"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <TextField
          name="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          className="customTextField"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className='buttomContainer'>
          <Button className='buttom' type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Aceptar'}
          </Button>
        </div>
      </Box>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          Inicio de sesión exitoso.
        </Alert>
      </Snackbar>
    </div>
  );
}