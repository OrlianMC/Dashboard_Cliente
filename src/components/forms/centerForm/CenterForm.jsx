import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postCenter, putCenter } from '../../../api/center_api';
import { DataContext } from '../../../dataContext/dataContext';
import "./centerForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
    organismo: '',
  };

  const [formData, setFormData] = useState(initialFormData);
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
      putCenter(formData, formData.idcentro);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postCenter(formData);
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadData(!loadData);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='centercreateContainer'>
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
          name="organismo"
          label="Organismo"
          variant="outlined"
          className="customTextField"
          value={formData.organismo}
          onChange={handleChange}
        />
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}