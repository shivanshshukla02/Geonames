import React from "react";
import Navbar from "./Navbar";
import MyDatePicker from "./MyDatePicker";
import "../styles/datepicker.css";



function Reports() {
  

  return (
    <>
      <Navbar heading={""} />
      <din className='cont'>Dashboard</din>

      <div className="container" style={{ height: "100%" }}>
       
        <div className="col-sm-12">
         
          <MyDatePicker />
         
        </div>
{/* <Footer/> */}


      </div>
      {/* <DoughnutChart/> */}
      
    </>
  );
}

export default Reports;
