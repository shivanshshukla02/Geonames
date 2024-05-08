import React from "react";
import "../styles/navbar.css";
import logo from "./logo1.jpg";
import logo1 from "./geonameslogo.png";
const Navbar = (props) => {
  return (
    <nav className="navbar1 sticky" style={{width:"100%",height:"60px"}}>
      <img
        src={logo}
        alt="Logo"
        className="img-fluid"
        style={{ width: "100px", height: "50px" }}
      />
     
      

<div className="navbarh" style={{color:"black",fontWeight:"600"}}>  GeoNames</div>
    </nav>
  );
};

export default Navbar;
