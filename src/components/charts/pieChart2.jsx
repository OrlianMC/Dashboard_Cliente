import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart2 = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
    }],
  });

  if (!data || data.length === 0) {
    return <div>No hay datos disponibles para mostrar.</div>;
  }

  const total = data.reduce((sum, element) => sum + element.doctorando_count, 0);

  useEffect(() => {
    const labels = data.map(item => item.nombre);
    const counts = data.map(item => item.doctorando_count);
    const colors = data.map(() => `hsl(${Math.random() * 360}, 70%, 50%)`); // Colores aleatorios

    setChartData({
      labels,
      datasets: [{
        data: counts,
        backgroundColor: colors,
      }],
    });
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const count = tooltipItem.raw;
            const percentage = total ? ((count / total) * 100).toFixed(2) : 0;
            return `${count} (${percentage}%)`;
          },
        },
        bodyFont: {
          size: 14,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 10,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '80%', marginTop: '5vh' }}>
      {/* <div style={{ width: '40%', height: '40%' }}> */}
      <Pie data={chartData} options={options} />
      {/* </div> */}
    </div>
  );
};

// Validación de props
PieChart2.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      doctorando_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChart2;