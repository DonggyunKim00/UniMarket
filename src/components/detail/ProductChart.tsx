import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styled from 'styled-components';

const ProductChart = ({ data }: any) => {
  return (
    <LineChart width={390} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis dataKey="pay" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pay"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default ProductChart;
