import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const budgetData = [
  {
    field: "Development",
    AllocatedBudget: 150000,
    ActualSpending: 145000,
    MaxBudget: 200000,
  },
  {
    field: "Marketing",
    AllocatedBudget: 90000,
    ActualSpending: 85000,
    MaxBudget: 120000,
  },
  {
    field: "Sales",
    AllocatedBudget: 120000,
    ActualSpending: 70000,
    MaxBudget: 100000,
  },
  {
    field: "Administration",
    AllocatedBudget: 140000,
    ActualSpending: 55000,
    MaxBudget: 60000,
  },
  {
    field: "Customer Support",
    AllocatedBudget: 30000,
    ActualSpending: 31000,
    MaxBudget: 50000,
  },
  {
    field: "Research and Development",
    AllocatedBudget: 120000,
    ActualSpending: 115000,
    MaxBudget: 150000,
  },
];

const RadialChartComponent = ({ data = budgetData }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="field" />
        <PolarRadiusAxis />
        <Radar
          name="ABC Corp"
          dataKey="AllocatedBudget"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="ABC Corp"
          dataKey="ActualSpending"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadialChartComponent;
