import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);

const SparklineChart1 = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data.length > 0) {
      const labels = data.map(item => item.año);
      const graduatedCounts = data.map(item => item.total_graduados);
      const pendingCounts = data.map(item => item.total_doctorandos);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Graduados',
            data: graduatedCounts,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Doctorandos',
            data: pendingCounts,
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true,
            tension: 0.4,
          },
        ],
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
          text: 'Fechas de Defensa',
          font: { size: 16 },
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cantidad',
          font: { size: 16 },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || '';
            const count = tooltipItem.raw || 0;
            return `${datasetLabel}: ${count}`;
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
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

SparklineChart1.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      año: PropTypes.number.isRequired,
      total_graduados: PropTypes.number.isRequired,
      total_doctorandos: PropTypes.number.isRequired,
    })
  ),
};

export default SparklineChart1;