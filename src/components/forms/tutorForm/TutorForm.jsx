import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { DataContext } from '../../../dataContext/dataContext';
import { postTutor, putTutor } from '../../../api/tutor_api';
import "./tutorForm.css";

export default function BasicTextFields({ initialData }) {
  const initialFormData = {
    doctor_iddoctor: '',
    doctorando_iddoctorando: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const { persons, doctors, doctoral_students, loadData, setLoadData } = useContext(DataContext);
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
      console.log("ID:", formData.idtutor);
      putTutor(formData, formData.idtutor);
    } else {
      // Lógica para crear un nuevo registro
      console.log("Crear:", formData);
      postTutor(formData)
    }
    setFormData(initialFormData); // Restablecer el formulario
    setLoadData(!loadData);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className='tutorcreateContainer'>
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
          name="doctor_iddoctor"
          select
          label="Doctor"
          value={formData.doctor_iddoctor}
          helperText="Seleccione el doctor"
          className="customTextField"
          onChange={handleChange}
        >
          {doctors.map((option) => (
            <MenuItem key={option.iddoctor} value={option.iddoctor}>
              {
                persons.find(person => person.idpersona === option.persona_idpersona || 0)?.nombre || 'N/A'
                // option.persona_idpersona
              }
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="doctorando_iddoctorando"
          select
          label="Doctorando"
          value={formData.doctorando_iddoctorando}
          helperText="Seleccione el nombre del doctorando"
          className="customTextField"
          onChange={handleChange}
        >
          {doctoral_students.map((option) => (
            <MenuItem key={option.iddoctorando} value={option.iddoctorando}>
              {
              persons.find(person => person.idpersona === option.persona_idpersona || 0)?.nombre || 'N/A'
              // option.iddoctorando
              }
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