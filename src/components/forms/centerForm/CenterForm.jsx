import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postCenter, putCenter } from '../../../api/center_api';
import { DataContext } from '../../../dataContext/dataContext';
import "./centerForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    organismo: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { loadCenter, setLoadCenter } = useContext(DataContext);
  const navigate = useNavigate();

  // Efecto para cargar los datos iniciales
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); // Limpiar el error del campo
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.nombre) {
      errors.nombre = "El nombre es obligatorio.";
    } else if (formData.nombre.length < 3) {
      errors.nombre = "El nombre debe tener al menos 3 caracteres.";
    } else if (formData.nombre.length > 50) {
      errors.nombre = "El nombre no puede exceder los 50 caracteres.";
    }

    if (!formData.organismo) {
      errors.organismo = "El organismo es obligatorio.";
    } else if (formData.organismo.length < 3) {
      errors.organismo = "El organismo debe tener al menos 3 caracteres.";
    } else if (formData.organismo.length > 50) {
      errors.organismo = "El organismo no puede exceder los 50 caracteres.";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // No enviar el formulario si hay errores
    }

    if (initialData) {
      console.log("Modificar:", formData);
      await putCenter(formData, formData.idcentro);
    } else {
      console.log("Crear:", formData);
      await postCenter(formData);
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadCenter(!loadCenter);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='centercreateContainer'>
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
        autoComplete="on"
      >
        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          className="customTextField"
          value={formData.nombre}
          onChange={handleChange}
          error={!!errors.nombre} // Indica que hay un error
          helperText={errors.nombre} // Muestra el mensaje de error
        />
        <TextField
          name="organismo"
          label="Organismo"
          variant="outlined"
          className="customTextField"
          value={formData.organismo}
          onChange={handleChange}
          error={!!errors.organismo} // Indica que hay un error
          helperText={errors.organismo} // Muestra el mensaje de error
        />
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}