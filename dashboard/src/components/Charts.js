import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import PieChart from './PieCharts'
import '../styles/piechartdiv.css'
const data = [
    { label: "Item 1", value: 10, color: "red" },
    { label: "Item 2", value: 20, color: "blue" },
    { label: "Item 3", value: 30, color: "green" },
  ];
  const data1 = [
    { label: "Item 1", value: 20, color: "red" },
    { label: "Item 2", value: 10, color: "blue" },
    { label: "Item 3", value: 30, color: "green" },
  ];
  const data2 = [
    { label: "Item 1", value: 50, color: "red" },
    { label: "Item 2", value: 20, color: "blue" },
    { label: "Item 3", value: 30, color: "green" },
  ];
  const data3 = [
    { label: "Item 1", value: 30, color: "red" },
    { label: "Item 2", value: 20, color: "blue" },
    { label: "Item 3", value: 10, color: "green" },
  ];

function Charts() {
  return (
    <div className='container-fluid bg-secondary min vh-100'>
   <Navbar heading={ 'Welcome to Charts Section'}/>
   
    <div className='row'>
      <div className='col-2 bg-white vh-100'> <Sidebar/></div>
     
      <div className='piechart1'> <PieChart data={data1}/></div>
      <div className='piechart2'> <PieChart data={data2}/></div>
      <div className='piechart3'> <PieChart data={data3}/></div>
     
    </div>
   
    </div>
  )
}

export default Charts
