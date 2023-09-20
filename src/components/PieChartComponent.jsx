import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const allocatedBudget2 = [
  { name: "Development", value: 400000 },
  { name: "Marketing", value: 300000 },
  { name: "Sales", value: 300000 },
  { name: "Administration", value: 200000 },
];

const actualSpending2 = [
  { name: "Dev: Salaries", value: 220000 },
  { name: "Dev: Operations", value: 180000 },
  { name: "Mkt: Online", value: 150000 },
  { name: "Mkt: Offline", value: 150000 },
  { name: "Sales: Domestic", value: 200000 },
  { name: "Sales: International", value: 100000 },
  { name: "Admin: HR", value: 100000 },
  { name: "Admin: Facilities", value: 100000 },
];

const PieChartComponent = ({
  allocatedBudget = allocatedBudget2,
  actualSpending = actualSpending2,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={750} height={450}>
        <Pie
          data={allocatedBudget}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={actualSpending}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
export default PieChartComponent;
