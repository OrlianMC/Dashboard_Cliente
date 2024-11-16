// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { green } from '@mui/material/colors';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart3 = ({ data }) => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     if (data.length > 0) {
//       const ageCounts = {};
//       const colors = {};

//       data.forEach(item => {
//         const age = item.rango_edad;
//         const count = item.cantidad_doctorandos;

//         ageCounts[age] = count;

//         if (!colors[age]) {
//           colors[age] = `hsl(${Math.random() * 360}, 70%, 50%)`;
//         }
//       });

//       const labels = Object.keys(ageCounts);
//       const datasets = [{
//         label: 'Doctorandos',
//         data: labels.map(age => ageCounts[age] || 0),
//         backgroundColor: "#2979ff" //'rgba(0, 128, 0, 0.2)', // labels.map(age => colors[age]),
//       }];

//       setChartData({
//         labels,
//         datasets,
//       });
//     }
//   }, [data]);

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Grupos etarios',
//           font: {
//             size: 16,
//           },
//         },
//         ticks: {
//           autoSkip: false,
//           maxRotation: 90,
//           minRotation: 45,
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Número de Doctorandos',
//           font: {
//             size: 16,
//           },
//         },
//         beginAtZero: true,
//       },
//     },
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => {
//             const count = tooltipItem.raw;
//             // const age = chartData.labels[tooltipItem.dataIndex];
//             return `Doctorandos: ${count}`;
//           },
//         },
//         bodyFont: {
//           size: 14,
//         },
//       },
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           boxWidth: 15,
//           padding: 20,
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '100%', margin: '0 auto', marginTop: '5vh' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// BarChart3.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       rango_edad: PropTypes.string.isRequired,
//       cantidad_doctorandos: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default BarChart3;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart3 = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data.length > 0) {
      const ageGroups = {};
      // const colors = {};

      data.forEach(item => {
        const ageGroup = item.rango_edad;
        const countDoctorandos = item.cantidad_doctorandos;
        const countDoctores = item.cantidad_doctores;

        ageGroups[ageGroup] = { doctorandos: countDoctorandos, doctores: countDoctores };

        // if (!colors[ageGroup]) {
        //   colors[ageGroup] = `hsl(${Math.random() * 360}, 70%, 50%)`;
        // }
      });

      const labels = Object.keys(ageGroups);
      const datasets = [
        {
          label: 'Doctorandos',
          data: labels.map(ageGroup => ageGroups[ageGroup].doctorandos || 0),
          backgroundColor: 'rgba(0, 0, 200, 1)',
        },
        {
          label: 'Doctores',
          data: labels.map(ageGroup => ageGroups[ageGroup].doctores || 0),
          backgroundColor: 'rgba(200, 0, 0, 1)',
        }
      ];

      setChartData({
        labels,
        datasets,
      });
    }
    console.log("Dataaaa:",data);
  }, [data]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Grupos etarios',
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
          text: 'Número de Doctorandos y Doctores',
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
            // const ageGroup = chartData.labels[tooltipItem.dataIndex];
            return `${ chartData.datasets[tooltipItem.datasetIndex].label }: ${ count } `;
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

BarChart3.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      rango_edad: PropTypes.string.isRequired,
      cantidad_doctorandos: PropTypes.number.isRequired,
      cantidad_doctores: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart3;