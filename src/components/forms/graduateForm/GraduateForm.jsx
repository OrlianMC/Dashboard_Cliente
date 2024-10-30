import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./graduateForm.css";
import { DataContext } from '../../../dataContext/dataContext';
import { postGraduate, putGraduate } from '../../../api/graduate_api';

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    fechadefensa: '',
    persona_idpersona: '',
    facultadarea_idarea: '',
    areadeconocimiento_idareadeconocimiento: '', 
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { areas, knowledge_areas, persons } = useContext(DataContext);
  const { loadGraduate, setLoadGraduate } = useContext(DataContext);
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
    const newErrors = {};

    if (!formData.fechadefensa) {
      newErrors.fechadefensa = "La fecha de defensa es obligatoria.";
    } else if (!/^\d/.test(formData.fechadefensa)) {
      newErrors.fechadefensa = "La fecha de defensa debe ser un número.";
    } else if (formData.fechadefensa < 0){
      newErrors.fechadefensa = "Fecha de defensa incorrecta.";
    }

    if (!formData.persona_idpersona) newErrors.persona_idpersona = "Seleccione la persona.";
    if (!formData.facultadarea_idarea) newErrors.facultadarea_idarea = "Seleccione el área.";
    if (!formData.areadeconocimiento_idareadeconocimiento) newErrors.areadeconocimiento_idareadeconocimiento = "Seleccione el área de conocimiento.";


    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // No enviar el formulario si hay errores
    }

    try {
      if (initialData) {
        console.log("Modificar:", formData);
        await putGraduate(formData, formData.idgraduado);
      } else {
        console.log("Crear:", formData);
        await postGraduate(formData);
      }
      setFormData(initialFormData); // Restablecer el formulario
      setLoadGraduate(!loadGraduate);
      navigate(-1);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({ submit: "Error al enviar el formulario." });
    }
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='personcreateContainer'>
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
          name="fechadefensa"
          label="Fecha de Defensa"
          variant="outlined"
          className="customTextField"
          value={formData.fechadefensa}
          onChange={handleChange}
          error={!!errors.fechadefensa}
          helperText={errors.fechadefensa}
        />
        <TextField
          name="facultadarea_idarea"
          select
          label="Área"
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
          name="persona_idpersona"
          select
          label="Persona"
          value={formData.persona_idpersona}
          helperText={errors.persona_idpersona || "Seleccione la persona"}
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