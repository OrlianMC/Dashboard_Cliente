import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import "./personForm.css";

// Opciones para los campos
const sexo_currencies = [
  { value: 'Masculino', label: 'M' },
  { value: 'Femenino', label: 'F' },
];

const area_currencies = [
  { value: 'Facultad 4', label: 'F4' },
  { value: 'Facultad 2', label: 'F2' },
];

const pais_currencies = [
  { value: 'Cuba', label: 'CUB' },
  { value: 'Estados Unidos', label: 'USA' },
];

const centro_currencies = [
  { value: 'Universidad de las Ciencias Informáticas', label: 'UCI' },
  { value: 'Ciudad Universitaria José Antonio Echeverría', label: 'CUJAE' },
];

const sector_currencies = [
  { value: 'Tecnologías', label: 'TECN' },
];

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    apellido: '',
    sexo: '',
    plantillaarea_idarea: '',
    pais_idpais: '',
    centro_idcentro: '',
    sectorest_idsectorest: '',
  };

  const [formData, setFormData] = useState(initialFormData);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (initialData) {
      // Lógica para modificar el registro
      console.log("Modificar:", formData);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
    }

    setFormData(initialFormData); // Restablecer el formulario

    // Aquí puedes agregar la lógica para enviar los datos a tu API
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
          {area_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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
          {pais_currencies.map((option) => (
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
          helperText="Seleccione el centro"
          className="customTextField"
          onChange={handleChange}
        >
          {centro_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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
          {sector_currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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