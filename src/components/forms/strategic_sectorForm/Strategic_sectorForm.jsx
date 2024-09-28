import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postSector, putSector } from '../../../api/sector_api';
import { DataContext } from '../../../dataContext/dataContext';
import "./strategic_sectorForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { loadSector, setLoadSector } = useContext(DataContext);
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
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
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
        await putSector(formData, formData.idsectorest);
      } else {
        console.log("Crear:", formData);
        await postSector(formData);
      }
      setFormData(initialFormData); // Restablecer el formulario
      setLoadSector(!loadSector);
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
    <div className='strategic_sectorcreateContainer'>
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
          error={!!errors.nombre}
          helperText={errors.nombre}
        />
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}