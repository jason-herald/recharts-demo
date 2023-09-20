import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const profitLossData = [
  { Month: "January", ProfitLoss: 200, OperatingExpenses: 150 },
  { Month: "February", ProfitLoss: -50, OperatingExpenses: 180 },
  { Month: "March", ProfitLoss: 300, OperatingExpenses: 140 },
  { Month: "April", ProfitLoss: -100, OperatingExpenses: 210 },
  { Month: "May", ProfitLoss: 150, OperatingExpenses: 130 },
  { Month: "June", ProfitLoss: 50, OperatingExpenses: 160 },
  { Month: "July", ProfitLoss: -20, OperatingExpenses: 150 },
  { Month: "August", ProfitLoss: 220, OperatingExpenses: 110 },
  { Month: "September", ProfitLoss: -30, OperatingExpenses: 170 },
  { Month: "October", ProfitLoss: 180, OperatingExpenses: 120 },
  { Month: "November", ProfitLoss: -70, OperatingExpenses: 200 },
  { Month: "December", ProfitLoss: 250, OperatingExpenses: 100 },
];

const BarChartComponent = ({ data = profitLossData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="ProfitLoss" fill="#8884d8" />
        <Bar dataKey="OperatingExpenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
