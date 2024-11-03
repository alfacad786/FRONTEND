import "../css/Quntity.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";
import Bottom from "../bottom.jsx";
import { useState } from "react";

function BricksAreaCal({ area,Bricks,CivilWork,Rasio,Cement,Agriggat,Send }) {
  const navigate = useNavigate();
// console.log(area);
  return (
    <>
      <div id="area">
        <h5>area of {CivilWork}</h5>

        <p>Area={area} ft3</p>
        <p>bricks={Bricks} NO.</p>
       
        <p>Rasio={Rasio} sqft</p>
        <p>cement={Cement} sqft</p>
        <p>Send={Send} sqft</p>
        <p>Agriggat={Agriggat} sqft</p>
      </div>


      
    </>
  );
}
export default BricksAreaCal;
