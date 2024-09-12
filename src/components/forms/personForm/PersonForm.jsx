import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./personForm.css";
import { DataContext } from '../../../dataContext/dataContext';
import { useContext } from 'react';
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
  const { areas, centers, countries, sectors } = useContext(DataContext);
  const { refreshPerson } = useContext(DataContext);
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
      console.log("ID:", formData.idpersona);
      putPerson(formData, formData.idpersona);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postPerson(formData)
    }

    setFormData(initialFormData); // Restablecer el formulario
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
          name="apellido"
          label="Apellido"
          variant="outlined"
          className="customTextField"
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextField
          name="ci"
          label="Carnet de identidad"
          variant="outlined"
          className="customTextField"
          value={formData.ci}
          onChange={handleChange}
        />
        <TextField
          name="sexo"
          select
          label="Sexo"
          value={formData.sexo}
          helperText="Seleccione el sexo"
          className="customTextField"
          onChange={handleChange}
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
          name="pais_idpais"
          select
          label="País"
          value={formData.pais_idpais}
          helperText="Seleccione el país"
          className="customTextField"
          onChange={handleChange}
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
          helperText="Seleccione el centro"
          className="customTextField"
          onChange={handleChange}
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