import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { useContext } from 'react';
import { postKnowledge_area, putKnowledge_area } from '../../../api/knowledge_area_api';
import "./knowledge_areaForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    nombre: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const { refreshKnowledge_area } = useContext(DataContext);
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
      putKnowledge_area(formData, formData.idareadeconocimiento);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postKnowledge_area(formData)
    }

    setFormData(initialFormData); // Restablecer el formulario
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='knowledge_areacreateContainer'>
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
        <div className='buttomContainer'>
          <Button className='buttom' type="button" onClick={handleCancel}>Cancelar</Button>
          <Button className='buttom' type="submit">Aceptar</Button>
        </div>
      </Box>
    </div>
  );
}