import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postProgram, putProgram } from '../../../api/program_api';
import "./programForm.css";

// Opciones para los campos
const boolean_currencies = [
  { value: true, label: 'Si' },
  { value: false, label: 'No' },
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    sectorest: '',
    desarrollolocal: '',
    adistancia: '',
    estdesarrollomun: '',
    area_idarea: '',
    areadeconocimiento_idareadeconocimiento: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const { areas, knowledge_areas } = useContext(DataContext);
  const { loadData, setLoadData } = useContext(DataContext);
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
      console.log("ID:", formData.idprograma);
      putProgram(formData, formData.idprograma);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postProgram(formData)
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadData(!loadData);
    navigate(-1);
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
          name="nombre"
          label="Nombre"
          variant="outlined"
          className="customTextField"
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextField
          name="sectorest"
          select
          label="Sector Estratégico"
          value={formData.sectorest}
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
          name="adistancia"
          select
          label="Distancia"
          value={formData.adistancia}
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
          name="estdesarrollomun"
          select
          label="Desarrollo Municipal"
          value={formData.estdesarrollomun}
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
          name="area_idarea"
          select
          label="Área"
          value={formData.area_idarea}
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
          name="areadeconocimiento_idareadeconocimiento"
          select
          label="Área de Conocimiento"
          value={formData.areadeconocimiento_idareadeconocimiento}
          helperText="Seleccione el país"
          className="customTextField"
          onChange={handleChange}
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