import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postDoctor, putDoctor } from '../../../api/doctor_api';
import "./doctorForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    persona_idpersona: '',
    facultadarea_idarea: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { areas, persons, loadDoctor, setLoadDoctor } = useContext(DataContext);
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
    if (!formData.persona_idpersona) {
      errors.persona_idpersona = "Seleccione una persona.";
    }
    if (!formData.facultadarea_idarea) {
      errors.facultadarea_idarea = "Seleccione un área.";
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
      await putDoctor(formData, formData.iddoctor);
    } else {
      console.log("Crear:", formData);
      await postDoctor(formData);
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadDoctor(!loadDoctor);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='doctorcreateContainer'>
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
          name="persona_idpersona"
          select
          label="Persona"
          value={formData.persona_idpersona}
          helperText={errors.persona_idpersona || "Seleccione el nombre de la persona"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.persona_idpersona} // Indica que hay un error
        >
          {persons.map((option) => (
            <MenuItem key={option.nombre} value={option.idpersona}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="facultadarea_idarea"
          select
          label="Facultad Área"
          value={formData.facultadarea_idarea}
          helperText={errors.facultadarea_idarea || "Seleccione el área"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.facultadarea_idarea} // Indica que hay un error
        >
          {areas.map((option) => (
            <MenuItem key={option.nombre} value={option.idarea}>
              {option.nombre}
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