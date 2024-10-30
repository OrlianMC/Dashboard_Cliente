import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieChart2({ array }) {
  if (!array || array.length === 0) {
    return <div>No hay datos disponibles para mostrar.</div>;
  }

  const total = array.reduce((sum, element) => sum + element.doctorando_count, 0);

  const dataChart = array.map((element, index) => ({
    id: index + 1,
    value: element.doctorando_count,
    label: element.nombre,
    percentage: total ? ((element.doctorando_count / total) * 100).toFixed(2) : 0,
  }));

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 20,
          arcLabelRadius: '65%',
          data: dataChart,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: (item) => `${item.percentage}%`,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          
        },
      }}
      height={200}
    />
  );
}

PieChart2.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      doctorando_count: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ).isRequired,
};