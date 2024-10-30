import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postUser, putUser } from '../../../api/user_api';
import "./registerForm.css";

const role_currencies = [
  { value: 'admin', label: 'Administrador' },
  { value: 'manager', label: 'Gerente' },
  { value: 'user', label: 'Usuario' }
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    username: '',
    password: '',
    email: '',
    role: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const { token, loadUser, setLoadUser } = useContext(DataContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({ 
        ...initialFormData,
        ...initialData
      });
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) {
        errors.username = "El nombre de usuario es obligatorio";
    }
    if (!formData.password) {
        errors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    if (!formData.email) {
        errors.email = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "El correo no es válido";
    }
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    if (initialData) {
        console.log("Modificar:", formData);
        await putUser(token, formData, formData.id);
    } else {
        console.log("Crear:", formData);
        await postUser(token, formData);
    }
    setFormData(initialFormData);
    setLoadUser(!loadUser);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='registercreateContainer'>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': { m: 0.3, width: '60ch', height: '10ch' },
          alignContent: 'center',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="username"
          label="Nombre de usuario"
          variant="outlined"
          className="customTextField"
          value={formData.username}
          onChange={handleChange}
          error={!!errors.username}
          helperText={errors.username}
        />
        <TextField
            name="password"
            label="Contraseña"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            className="customTextField"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
        <TextField
          name="email"
          label="Correo"
          variant="outlined"
          className="customTextField"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          name="role"
          select
          label="Rol"
          value={formData.role}
          helperText="Seleccione la opción deseada"
          className="customTextField"
          onChange={handleChange}
        >
          {role_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}