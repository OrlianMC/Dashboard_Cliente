import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./personForm.css";
import { DataContext } from '../../../dataContext/dataContext';
import { postPerson, putPerson } from '../../../api/person_api';

// Opciones para los campos
const sexo_currencies = [
  { value: 'Masculino', label: 'M' },
  { value: 'Femenino', label: 'F' },
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    apellido: '',
    ci: '',
    sexo: '',
    plantillaarea_idarea: '',
    pais_idpais: '',
    centro_idcentro: '',
    sectorest_idsectorest: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { areas, centers, countries, sectors } = useContext(DataContext);
  const { loadPerson, setLoadPerson } = useContext(DataContext);
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
    if (!formData.apellido) newErrors.apellido = "El apellido es obligatorio.";

    // Validación del carnet de identidad
    if (!formData.ci) {
      newErrors.ci = "El carnet de identidad es obligatorio.";
    } else if (!/^\d{11}$/.test(formData.ci)) {
      newErrors.ci = "El carnet de identidad debe tener exactamente 11 dígitos y solo contener números.";
    } else {
      const year = parseInt(formData.ci.slice(0, 2), 10);
      const month = parseInt(formData.ci.slice(2, 4), 10);
      const day = parseInt(formData.ci.slice(4, 6), 10);

      if (month < 1 || month > 12) {
        newErrors.ci = "El mes debe estar entre 01 y 12.";
      }
      if (day < 1 || day > 31) {
        newErrors.ci = "El día debe estar entre 01 y 31.";
      }
    }

    if (!formData.sexo) newErrors.sexo = "Seleccione el sexo.";
    if (!formData.plantillaarea_idarea) newErrors.plantillaarea_idarea = "Seleccione el área.";
    if (!formData.pais_idpais) newErrors.pais_idpais = "Seleccione el país.";
    if (!formData.centro_idcentro) newErrors.centro_idcentro = "Seleccione el centro.";
    if (!formData.sectorest_idsectorest) newErrors.sectorest_idsectorest = "Seleccione el sector estratégico.";

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
        await putPerson(formData, formData.idpersona);
      } else {
        console.log("Crear:", formData);
        await postPerson(formData);
      }
      setFormData(initialFormData); // Restablecer el formulario
      setLoadPerson(!loadPerson);
      navigate(-1);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({ submit: "Error al enviar el formulario." });
    }
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  const ciError = formData.ci.length !== 11 || !/^\d+$/.test(formData.ci);

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
          name="apellido"
          label="Apellido"
          variant="outlined"
          className="customTextField"
          value={formData.apellido}
          onChange={handleChange}
          error={!!errors.apellido}
          helperText={errors.apellido}
        />
        <TextField
          name="ci"
          label="Carnet de identidad"
          variant="outlined"
          className="customTextField"
          value={formData.ci}
          onChange={handleChange}
          error={ciError || !!errors.ci}
          helperText={ciError ? "El carnet de identidad debe tener exactamente 11 dígitos y solo contener números." : errors.ci}
        />
        <TextField
          name="sexo"
          select
          label="Sexo"
          value={formData.sexo}
          helperText={errors.sexo || "Seleccione el sexo"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.sexo}
        >
          {sexo_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="plantillaarea_idarea"
          select
          label="Área"
          value={formData.plantillaarea_idarea}
          helperText={errors.plantillaarea_idarea || "Seleccione el área"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.plantillaarea_idarea}
        >
          {areas.map((option) => (
            <MenuItem key={option.nombre} value={option.idarea}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="pais_idpais"
          select
          label="País"
          value={formData.pais_idpais}
          helperText={errors.pais_idpais || "Seleccione el país"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.pais_idpais}
        >
          {countries.map((option) => (
            <MenuItem key={option.nombre} value={option.idpais}>
              {option.nombre}
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
          name="sectorest_idsectorest"
          select
          label="Sector Estratégico"
          value={formData.sectorest_idsectorest}
          helperText={errors.sectorest_idsectorest || "Seleccione el sector estratégico"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.sectorest_idsectorest}
        >
          {sectors.map((option) => (
            <MenuItem key={option.nombre} value={option.idsectorest}>
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