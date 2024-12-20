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
    areadeconocimiento_idareadeconocimiento: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { areas, persons, knowledge_areas ,loadDoctor, setLoadDoctor } = useContext(DataContext);
  const navigate = useNavigate();

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
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.persona_idpersona) {
      errors.persona_idpersona = "Seleccione una persona.";
    }
    if (!formData.facultadarea_idarea) {
      errors.facultadarea_idarea = "Seleccione un área.";
    }
    if (!formData.areadeconocimiento_idareadeconocimiento) {
      errors.areadeconocimiento_idareadeconocimiento = "Seleccione un área de conocimiento.";
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
          error={!!errors.persona_idpersona}
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
          error={!!errors.facultadarea_idarea}
        >
          {areas.map((option) => (
            <MenuItem key={option.nombre} value={option.idarea}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="areadeconocimiento_idareadeconocimiento"
          select
          label="Área de Conocimiento"
          value={formData.areadeconocimiento_idareadeconocimiento}
          helperText={errors.areadeconocimiento_idareadeconocimiento || "Seleccione el área de conocimiento"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.areadeconocimiento_idareadeconocimiento}
        >
          {knowledge_areas.map((option) => (
            <MenuItem key={option.nombre} value={option.idareadeconocimiento}>
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