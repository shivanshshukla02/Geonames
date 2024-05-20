import React from 'react'
import HomeNavbar from './HomeNavbar';
import { Doughnut } from 'react-chartjs-2';

function Home() {
  const dataw = {
    labels:['impelsys','cecme','lll','kkk'] ,
    datasets: [
      {
       
        label: ['ClientId'],
        data: ['22', '11', '23', '32'],
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
  return (<>
  
      <HomeNavbar heading={''}/>
     
      <Doughnut {...config} />;
     
      
</>
   
     
    
  );
}

export default Home
