import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postArea, putArea } from '../../../api/area_api';
import { DataContext } from '../../../dataContext/dataContext';
import "./areaForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    codigo: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { loadArea, setLoadArea } = useContext(DataContext);
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
    else if (!formData.codigo) {
      errors.nombre = "El codigo es obligatorio.";
    }
    // else if (!/^[a-zA-Z\s]*$/.test(formData.nombre)) {
    //   errors.nombre = "El nombre solo puede contener letras y espacios.";
    // }
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
      await putArea(formData, formData.idarea);
    } else {
      console.log("Crear:", formData);
      await postArea(formData);
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadArea(!loadArea);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='areacreateContainer'>
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
          name="codigo"
          label="Código"
          variant="outlined"
          className="customTextField"
          value={formData.codigo}
          onChange={handleChange}
          error={!!errors.codigo} // Indica que hay un error
          helperText={errors.codigo} // Muestra el mensaje de error
        />
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}