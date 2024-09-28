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
    doctorando_iddoctorando: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { persons, doctors, doctoral_students, loadTutor, setLoadTutor } = useContext(DataContext);
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
    if (!formData.doctor_iddoctor) newErrors.doctor_iddoctor = "Seleccione un doctor.";
    if (!formData.doctorando_iddoctorando) newErrors.doctorando_iddoctorando = "Seleccione un doctorando.";
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
        await putTutor(formData, formData.idtutor);
      } else {
        console.log("Crear:", formData);
        await postTutor(formData);
      }
      setFormData(initialFormData); // Restablecer el formulario
      setLoadTutor(!loadTutor);
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
          helperText={errors.doctor_iddoctor || "Seleccione el doctor"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.doctor_iddoctor}
        >
          {doctors.map((option) => (
            <MenuItem key={option.iddoctor} value={option.iddoctor}>
              {
                persons.find(person => person.idpersona === option.persona_idpersona)?.nombre || 'N/A'
              }
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="doctorando_iddoctorando"
          select
          label="Doctorando"
          value={formData.doctorando_iddoctorando}
          helperText={errors.doctorando_iddoctorando || "Seleccione el nombre del doctorando"}
          className="customTextField"
          onChange={handleChange}
          error={!!errors.doctorando_iddoctorando}
        >
          {doctoral_students.map((option) => (
            <MenuItem key={option.iddoctorando} value={option.iddoctorando}>
              {
                persons.find(person => person.idpersona === option.persona_idpersona)?.nombre || 'N/A'
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