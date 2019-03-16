import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Deposits: 100, Withdrawals: 0},
  { name: 'Tue', Deposits: 0, Withdrawals: 100 },
  { name: 'Wed', Deposits: 1000, Withdrawals: 0 },
  { name: 'Thu', Deposits: 0, Withdrawals: 100 },
  { name: 'Fri', Deposits: 0, Withdrawals: 50 },
  { name: 'Sat', Deposits: 0, Withdrawals: 100 },
  { name: 'Sun', Deposits: 300, Withdrawals: 0 },
];


function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Deposits" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Withdrawals" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
