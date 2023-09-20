import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import RadialBarChartComponent from "./RadialBarChartComponent";
import RadialChartComponent from "./RadialChartComponent";

const ChartGrid = () => {
  return (
    <div className="chart-grid">
      <LineChartComponent />
      <AreaChartComponent />
      <BarChartComponent />
      <RadialChartComponent />
      <RadialBarChartComponent />
      <PieChartComponent />
    </div>
  );
};

export default ChartGrid;
