import * as React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarChart2({array}) {
  if (!array || array.length === 0) {
    return <div>No hay datos disponibles para mostrar.</div>;
  }

  // const dataChart = array.map((element, index) => ({
  //   id: index + 1,
  //   stack: element.doctorando_count,
  //   label: element.facultadarea_idarea__nombre,
  // }));



// "doctoral_students_by_program_and_area": [
//     {
//       "facultadarea_idarea__nombre": "Facultad 1",
//       "programa_idprograma__nombre": "Doctorado en Informática",
//       "doctorando_count": 30
//     },
//     {
//       "facultadarea_idarea__nombre": "DEP",
//       "programa_idprograma__nombre": "Doctorado en Bioinformatica",
//       "doctorando_count": 4
//     },
//     {
//       "facultadarea_idarea__nombre": "Rectoría",
//       "programa_idprograma__nombre": "Doctorado en estudios sociales de la ciencia y la tecnologia",
//       "doctorando_count": 8
//     },
//     {
//       "facultadarea_idarea__nombre": "CENED",
//       "programa_idprograma__nombre": "Doctorado en Ciencias de la Salud",
//       "doctorando_count": 1
//     },
//     {
//       "facultadarea_idarea__nombre": "Facultad 4",
//       "programa_idprograma__nombre": "Doctorado en Educación Superior",
//       "doctorando_count": 6
//     },
//     {
//       "facultadarea_idarea__nombre": "Facultad 3",
//       "programa_idprograma__nombre": "Doctorado en Ciencias de la Educación",
//       "doctorando_count": 10
//     }
//   ]
// }
  return (
    <BarChart
      series={[
        { data: [10], stack: 'A', label: 'Cienc. de la Edu.' },
        { data: [6], stack: 'A1', label: 'Edu. Sup.' },
        { data: [1], stack: 'A2', label: 'Cienc. de la Salud' }, 
        { data: [8], stack: 'A3', label: 'Est. Soc. de la Cienc. y la tecno.' },
        { data: [4], stack: 'A4', label: 'Bioinformatica' },
        { data: [29], stack: 'A5', label: 'Informática' },
        { data: [1], stack: 'A5', label: 'Informática' },
      ]}
      barLabel={(item, context) => {
        // if ((item.value ?? 0) > 10) {
        //   return 'High';
        // }
        // return context.bar.height < 60 ? null : item.value?.toString();
        return item.value?.toString();
      }}
      width={600}
      height={350}
    />
  );
}

BarChart2.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      doctorando_count: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
};