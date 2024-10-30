import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        {
          data: [5, 3, 1, 8, 3, 4],
        },
      ]}
      width={500}
      height={300}
    />
  );
}