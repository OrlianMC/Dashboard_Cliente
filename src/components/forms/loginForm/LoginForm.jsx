// import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button, Snackbar, Alert } from '@mui/material';
// import { DataContext } from '../../../dataContext/dataContext';
// import { postSesion } from '../../../api/sesion_api';
// import logo from '../../../img/logo_uci.png';
// import { decodeToken, isExpired } from "react-jwt";
// import { AuthContext } from '../../Context/AuthContext';
// import { types } from '../../types/types';
// import "./loginForm.css";

// export default function LoginForm({ onLoginSuccess }) {
//   const initialFormData = {
//     username: '',
//     password: '',
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const { setToken } = useContext(DataContext); 
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   // const navigate= useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!formData.username || !formData.password) {
//       return setError('Por favor, completa todos los campos.');
//     }
    
//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await postSesion(formData);
      
//       if (response && response.data && response.data.token) {
//         setToken(response.data.token);
//         console.log("Token es: ", response.data.token);
//         setSuccess(true);
//         onLoginSuccess();
//       } else {
//         setError('Credenciales incorrectas.');
//       }
      
//       // const tokenAccess = response.data.access;
//       // const tokenRefresh = response.data.refresh;
//       // const role= response.data.role;
//       // const username= response.data.username;

//       // const user = decodeToken(tokenAccess).username;

//       // localStorage.setItem('tokenAccess', tokenAccess);
//       // localStorage.setItem('tokenRefresh', tokenRefresh);

//       // if (!isExpired(tokenAccess)) {

//       //   const action = {
//       //       type: types.login,
//       //       payload: {
//       //           user,
//       //           username,
//       //           role,
//       //           tokenAccess,
//       //           tokenRefresh
//       //       }
//       //   }

//       //   dispatch(action);
        
//       //   navigate('/', {
//       //       replace: true
//       //   });
        
//       // }




//       setFormData(initialFormData);

//     } catch (error) {
//       alert("Error de inicio de sesión");
//       if (error.response) {
//         console.log('Error de autenticación:', error.response.data);
//         alert('Error: ' + error.response.data.detail); // El mensaje exacto del backend
//       } else {
//         console.log('Error en la solicitud:', error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCloseError = () => {
//     setError('');
//   };

//   const handleCloseSuccess = () => {
//     setSuccess(false);
//   };

//   return (
//     <div className='loginContainer'>
//       <img src={logo} alt="Logo" className="logo" />
//       <h2 className='h2'> Tablero de Operaciones Dirección de Posgrado: </h2>
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           '& > :not(style)': { m: 0.3, width: { xs: '60%', sm: '45vh' }, height: '10ch' },
//           alignContent: 'center',
//           alignItems: 'center',
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           name="username"
//           label="Usuario"
//           variant="outlined"
//           className="customTextField"
//           value={formData.username}
//           onChange={handleChange}
//           required
//         />
//         <TextField
//           name="password"
//           label="Contraseña"
//           variant="outlined"
//           type="password"
//           className="customTextField"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <div className='buttomContainer'>
//           <Button className='buttom' type="submit" disabled={loading}>
//             {loading ? 'Cargando...' : 'Aceptar'}
//           </Button>
//         </div>
//       </Box>
//       <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
//         <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
//           {error}
//         </Alert>
//       </Snackbar>
//       <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>
//         <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
//           Inicio de sesión exitoso.
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { useState, useContext } from 'react';
import { AuthContext } from '../../../authContext/authContext';
import { Button, Snackbar, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import logo from '../../../img/logo_uci.png';
import { postSesion } from '../../../api/sesion_api';
import "./loginForm.css";

export default function LoginForm({ onLoginSuccess }) {
  const initialFormData = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const { dispatch } = useContext(AuthContext); 
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
      const response = await postSesion(formData);
      
      if (response && response.data && response.data.token) {

        const tokenAccess = response.data.access;
        const tokenRefresh = response.data.refresh;
        localStorage.setItem('tokenAccess', tokenAccess);
        localStorage.setItem('tokenRefresh', tokenRefresh);

        dispatch({
          type: 'LOGIN',
          payload: {
            user: response.data.token.username,
            role: response.data.token.role,
            tokenAccess: response.data.token.access,
            tokenRefresh: response.data.token.refresh,
            token: response.data.token,
          },
        });
        setSuccess(true);
        onLoginSuccess();
      } else {
        setError('Credenciales incorrectas.');
      }

      setFormData(initialFormData);

    } catch (error) {
      alert("Error de inicio de sesión");
      if (error.response) {
        console.log('Error de autenticación:', error.response.data);
        alert('Error: ' + error.response.data.detail);
      } else {
        console.log('Error en la solicitud:', error.message);
      }
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