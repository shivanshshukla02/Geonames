import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homesidebar.css'

function ReportSidebar() {
  return (
    <div className='sidebar text-center'>
      <div className='list-group 'style={{marginTop:"25%"}}>
        
        

          <span className='fs-3'>Dashboard</span>
        
        </div>
      
      
      <div className='list-group text-center'style={{marginTop:"25%"}} >
        
        <Link to="/" className='list-group-item text-decoration-none text-center'>

          <span className='fs-5 text-center'style={{marginLeft:'35%'}}>Home</span>
        </Link>
        </div>
        <div className='list-group ' style={{marginTop:"25%"}}>
        <Link to="/reports" className='list-group-item text-decoration-none'>
    
          <span className='fs-5'style={{marginLeft:'30%'}}>Reports</span>
        </Link>
        </div>
       
        
    </div>
  )
}

export default ReportSidebar