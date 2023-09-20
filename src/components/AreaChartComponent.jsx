import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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

const AreaChartComponent = ({ data = sampleData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={750}
        height={450}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Chennai"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Bangalore"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
      </ResponsiveContainer>
    
  );
};

export default AreaChartComponent;
