import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart1 = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data.length > 0) {
      const faculties = {};
      const colors = {};

      data.forEach(item => {
        const faculty = item.facultadarea_idarea__codigo;
        const program = item.areadeconocimiento_idareadeconocimiento__nombre;
        const count = item.doctor_count;

        if (!faculties[faculty]) {
          faculties[faculty] = {};
        }
        faculties[faculty][program] = count;

        if (!colors[program]) {
          colors[program] = `hsl(${Math.random() * 360}, 70%, 50%)`;
        }
      });

      const labels = Object.keys(faculties);
      const datasets = Object.keys(colors).map(program => ({
        label: program,
        data: labels.map(faculty => faculties[faculty][program] || 0),
        backgroundColor: colors[program],
      }));

      setChartData({
        labels,
        datasets,
      });
    }
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Facultades',
          font: {
            size: 16,
          },
        },
        ticks: {
          autoSkip: false,
          maxRotation: 90,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Número de Doctorandos',
          font: {
            size: 16,
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const count = tooltipItem.raw;
            const datasetIndex = tooltipItem.datasetIndex;
            const knowledge_area = chartData.datasets[datasetIndex].label;
            return `${knowledge_area}: ${count}`;
          },
        },
        bodyFont: {
          size: 14,
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 15,
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '100%', margin: '0 auto', marginTop: '5vh' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

BarChart1.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      facultadarea_idarea__codigo: PropTypes.string.isRequired,
      areadeconocimiento_idareadeconocimiento__nombre: PropTypes.string.isRequired,
      doctor_count: PropTypes.number.isRequired,
    })
  )};

export default BarChart1;