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
  const { areas, persons, programs, sectors, loadData, setLoadData } = useContext(DataContext);
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (initialData) {
      // Lógica para modificar el registro
      console.log("Modificar:", formData);
      console.log("ID:", formData.iddoctorando);
      putDoctoral_student(formData, formData.iddoctorando);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postDoctoral_student(formData)
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadData(!loadData);
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
        />
        <TextField
          name="fingreso"
          label="Fecha de Ingreso"
          variant="outlined"
          className="customTextField"
          value={formData.fingreso}
          onChange={handleChange}
        />
        <TextField
          name="temadetesis"
          label="Tema de Tesis"
          variant="outlined"
          className="customTextField"
          value={formData.temadetesis}
          onChange={handleChange}
        />
        <TextField
          name="fingles"
          label="Fecha de Inglés"
          variant="outlined"
          className="customTextField"
          value={formData.fingles}
          onChange={handleChange}
        />
        <TextField
          name="fespecialidad"
          label="Fecha de Especialidad"
          variant="outlined"
          className="customTextField"
          value={formData.fespecialidad}
          onChange={handleChange}
        />
        <TextField
          name="desarrollolocal"
          select
          label="Desarrollo Local"
          value={formData.desarrollolocal}
          helperText="Seleccione la opción deseada"
          className="customTextField"
          onChange={handleChange}
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
          helperText="Seleccione el país"
          className="customTextField"
          onChange={handleChange}
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
          helperText="Seleccione el área"
          className="customTextField"
          onChange={handleChange}
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
          helperText="Seleccione el país"
          className="customTextField"
          onChange={handleChange}
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
          helperText="Seleccione el sector estratégico"
          className="customTextField"
          onChange={handleChange}
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