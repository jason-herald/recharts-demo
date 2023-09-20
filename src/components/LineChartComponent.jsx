import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { Month: "January", Chennai: 400, Bangalore: 240 },
  { Month: "February", Chennai: 300, Bangalore: 140 },
  { Month: "March", Chennai: 200, Bangalore: 980 },
  { Month: "April", Chennai: 278, Bangalore: 391 },
  { Month: "May", Chennai: 189, Bangalore: 480 },
  { Month: "June", Chennai: 239, Bangalore: 380 },
  { Month: "July", Chennai: 349, Bangalore: 430 },
];

const LineChartComponent = ({ data = sampleData }) => (
  <ResponsiveContainer width="100%" height={450}>
    <LineChart
      width={750}
      height={450}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Chennai"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Bangalore" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
