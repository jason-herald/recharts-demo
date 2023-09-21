import AreaChartComponent from "./AreaChartComponent";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import RadialBarChartComponent from "./RadialBarChartComponent";
import RadialChartComponent from "./RadialChartComponent";
import CustomLineChart from "./CustomLineChart";

const ChartGrid = () => {
  const sampleData = [
    { Month: "January", Chennai: 400, Bangalore: 240 },
    { Month: "February", Chennai: 300, Bangalore: 140 },
    { Month: "March", Chennai: 200, Bangalore: 980 },
    { Month: "April", Chennai: 278, Bangalore: 391 },
    { Month: "May", Chennai: 189, Bangalore: 480 },
    { Month: "June", Chennai: 239, Bangalore: 380 },
    { Month: "July", Chennai: 349, Bangalore: 430 },
  ];

  const xAxisKey = "Month"; // Dynamic x-axis key
  const keys = ["Chennai", "Bangalore"];
  return (
    <div className="chart-grid">
      <LineChartComponent />
      <AreaChartComponent />
      <BarChartComponent />
      <RadialChartComponent />
      <RadialBarChartComponent />
      <PieChartComponent />
      <CustomLineChart
        data={sampleData}
        xAxisKey={xAxisKey}
        keys={keys}
        width={600}
        height={400}
      />
    </div>
  );
};

export default ChartGrid;
