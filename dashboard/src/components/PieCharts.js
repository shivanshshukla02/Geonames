import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "Pie Chart",
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;