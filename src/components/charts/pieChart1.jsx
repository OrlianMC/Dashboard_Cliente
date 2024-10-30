// import React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

// export default function PieChart1() {
  // const desktopOS = [
  //   { id: 0, value: 40, label: 'Windows' },
  //   { id: 1, value: 30, label: 'macOS' },
  //   { id: 2, value: 20, label: 'Linux' },
  //   { id: 3, value: 10, label: 'Other 1' },
  //   { id: 4, value: 5, label: 'Other 2' },
  //   { id: 5, value: 5, label: 'Other 3' },
  //   { id: 6, value: 5, label: 'Other 4' },
  //   { id: 7, value: 5, label: 'Other 5' },
  //   { id: 8, value: 5, label: 'Other 6' },
  //   { id: 9, value: 5, label: 'Other 7' },
  // ];

//   const valueFormatter = (value) => `${value}%`;

//   return (
//     <PieChart
//       series={[
//         {
//           data: desktopOS,
//           highlightScope: { fade: 'global', highlight: 'item' },
//           faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//           valueFormatter,
//         },
//       ]}
//       height={200}
//     />
//   );
// }
import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieArcLabel() {
  
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          valueFormatter: (item) => `${item.value}`,
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
          alignItems: 'fex-end',
          justifyContent: 'space-between',
        },
      }}
      {...size}
    />
  );
}

const size = {
  // width: 
  height: 200,
};

const data = {
  data: [
    { id: 0, value: 40, label: 'Windows' },
    { id: 1, value: 30, label: 'macOS' },
    { id: 2, value: 20, label: 'Linux' },
    { id: 3, value: 10, label: 'Other 1' },
    { id: 4, value: 5, label: 'Other 2' },
    { id: 5, value: 5, label: 'Other 3' },
    { id: 6, value: 5, label: 'Other 4' },
    { id: 7, value: 5, label: 'Other 5' },
    { id: 8, value: 5, label: 'Other 6' },
    { id: 9, value: 5, label: 'Other 7' },
  ]
};
