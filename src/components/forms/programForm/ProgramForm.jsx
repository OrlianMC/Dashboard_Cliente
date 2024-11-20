import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postProgram, putProgram } from '../../../api/program_api';
import "./programForm.css";

// Opciones para los campos booleanos
const boolean_currencies = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    sectorest: '',
    desarrollolocal: '',
    adistancia: '',
    estdesarrollomun: '',
    centro_idcentro: '',
    areadeconocimiento_idareadeconocimiento: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { centers, knowledge_areas, loadProgram, setLoadProgram } = useContext(DataContext);
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
    if (formData.sectorest === undefined || formData.sectorest === null) {
      newErrors.sectorest = "Seleccione el sector estratégico.";
    }
    if (formData.desarrollolocal === undefined || formData.desarrollolocal === null) {
      newErrors.desarrollolocal = "Seleccione la opción de desarrollo local.";
    }
    if (formData.adistancia === undefined || formData.adistancia === null) {
      newErrors.adistancia = "Seleccione la opción de distancia.";
    }
    if (formData.estdesarrollomun === undefined || formData.estdesarrollomun === null) {
      newErrors.estdesarrollomun = "Seleccione la opción de desarrollo municipal.";
    }
    if (!formData.centro_idcentro) newErrors.centro_idcentro = "Seleccione el centro.";
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
        await putProgram(formData, formData.idprograma);
      } else {
        console.log("Crear:", formData);
        await postProgram(formData);
      }
      setFormData(initialFormData); // Restablecer el formulario
      setLoadProgram(!loadProgram);
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
    <div className='programcreateContainer'>
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
        <TextField
          name="sectorest"
          select
          label="Sector Estratégico"
          value={formData.sectorest}
          helperText={errors.sectorest || "Seleccione la opción deseada"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.sectorest}
        >
          {boolean_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="desarrollolocal"
          select
          label="Desarrollo Local"
          value={formData.desarrollolocal}
          helperText={errors.desarrollolocal || "Seleccione la opción deseada"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.desarrollolocal}
        >
          {boolean_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="adistancia"
          select
          label="Distancia"
          value={formData.adistancia}
          helperText={errors.adistancia || "Seleccione la opción deseada"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.adistancia}
        >
          {boolean_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="estdesarrollomun"
          select
          label="Desarrollo Municipal"
          value={formData.estdesarrollomun}
          helperText={errors.estdesarrollomun || "Seleccione la opción deseada"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.estdesarrollomun}
        >
          {boolean_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="centro_idcentro"
          select
          label="Centro"
          value={formData.centro_idcentro}
          helperText={errors.centro_idcentro || "Seleccione el centro"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.centro_idcentro}
        >
          {centers.map((option) => (
            <MenuItem key={option.nombre} value={option.idcentro}>
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