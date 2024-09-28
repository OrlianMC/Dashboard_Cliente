import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postDoctoral_student, putDoctoral_student } from '../../../api/doctoral_student_api';
import "./doctoral_studentForm.css";

// Opciones para los campos
const boolean_currencies = [
  { value: true, label: 'Si' },
  { value: false, label: 'No' },
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    fdefensa: '',
    fingreso: '',
    temadetesis: '',
    fingles: '',
    fespecialidad: '',
    desarrollolocal: '',
    persona_idpersona: '',
    facultadarea_idarea: '',
    programa_idprograma: '',
    sectorest_idsectorest: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { areas, persons, programs, sectors, loadDoctoral_Student, setLoadDoctoral_Student } = useContext(DataContext);
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
    if (!formData.fdefensa) {
      errors.fdefensa = "La fecha de defensa es obligatoria.";
    }
    if (!formData.fingreso) {
      errors.fingreso = "La fecha de ingreso es obligatoria.";
    }
    if (!formData.temadetesis) {
      errors.temadetesis = "El tema de tesis es obligatorio.";
    }
    if (!formData.fingles) {
      errors.fingles = "La fecha de inglés es obligatoria.";
    }
    if (!formData.fespecialidad) {
      errors.fespecialidad = "La fecha de especialidad es obligatoria.";
    }
    if (formData.desarrollolocal === '') {
      errors.desarrollolocal = "Seleccione una opción para desarrollo local.";
    }
    if (!formData.persona_idpersona) {
      errors.persona_idpersona = "Seleccione una persona.";
    }
    if (!formData.facultadarea_idarea) {
      errors.facultadarea_idarea = "Seleccione una facultad o área.";
    }
    if (!formData.programa_idprograma) {
      errors.programa_idprograma = "Seleccione un programa.";
    }
    if (!formData.sectorest_idsectorest) {
      errors.sectorest_idsectorest = "Seleccione un sector estratégico.";
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
      await putDoctoral_student(formData, formData.iddoctorando);
    } else {
      console.log("Crear:", formData);
      await postDoctoral_student(formData);
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadDoctoral_Student(!loadDoctoral_Student);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='doctoral_studentcreateContainer'>
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
          name="fdefensa"
          label="Fecha de Defensa"
          variant="outlined"
          className="customTextField"
          value={formData.fdefensa}
          onChange={handleChange}
          error={!!errors.fdefensa}
          helperText={errors.fdefensa}
        />
        <TextField
          name="fingreso"
          label="Fecha de Ingreso"
          variant="outlined"
          className="customTextField"
          value={formData.fingreso}
          onChange={handleChange}
          error={!!errors.fingreso}
          helperText={errors.fingreso}
        />
        <TextField
          name="temadetesis"
          label="Tema de Tesis"
          variant="outlined"
          className="customTextField"
          value={formData.temadetesis}
          onChange={handleChange}
          error={!!errors.temadetesis}
          helperText={errors.temadetesis}
        />
        <TextField
          name="fingles"
          label="Fecha de Inglés"
          variant="outlined"
          className="customTextField"
          value={formData.fingles}
          onChange={handleChange}
          error={!!errors.fingles}
          helperText={errors.fingles}
        />
        <TextField
          name="fespecialidad"
          label="Fecha de Especialidad"
          variant="outlined"
          className="customTextField"
          value={formData.fespecialidad}
          onChange={handleChange}
          error={!!errors.fespecialidad}
          helperText={errors.fespecialidad}
        />
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
          name="persona_idpersona"
          select
          label="Persona"
          value={formData.persona_idpersona}
          helperText={errors.persona_idpersona || "Seleccione una persona"}
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
          name="programa_idprograma"
          select
          label="Programa"
          value={formData.programa_idprograma}
          helperText={errors.programa_idprograma || "Seleccione un programa"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.programa_idprograma}
        >
          {programs.map((option) => (
            <MenuItem key={option.nombre} value={option.idprograma}>
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