import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [impelsys,cecme,lll,kkk],
  datasets: [
    {
      label:[],
      data: ['22', '11', '23', '32'],
      backgroundColor: ['#F7931A', '#4AC18D', '#FFC107'],
      borderColor: 'transparent',
    },
  ],
};

const config = {
  type: 'doughnut',
  data: dataw,
  options: {
    backgroundColor: 'linear-gradient(to right, #ff9966, #ff5e62)',
    title: {
      display: true,
      text: 'My Doughnut Chart',
      fontSize: 24,
      fontColor: '#ffffff',
      padding: 20,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

const DoughnutChart = () => {
  return <Doughnut {...config} />;
};

export default DoughnutChart;