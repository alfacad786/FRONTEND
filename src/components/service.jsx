import "../css/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  function gotoCivilEngineering() {
    navigate("/CivilEngineering");
  }
  function gotoArchitect() {
    navigate("/CivilEngineering");
  }
  function gotoSupervision() {
    navigate("/Architect");
  }
  function goto3dCreator() {
    navigate("/3dCreator");
  }
  function gotoWebDevelopment() {
    navigate("/WebDevelopment");
  }
  return (
    <div id="Services">
      <h6>Over Services</h6>
      <p onClick={gotoCivilEngineering}>• Civil Engineering</p>
      <p onClick={gotoArchitect}>• Architectural Planning</p>
      <p onClick={gotoSupervision}>• Site Supervision</p>
      <p onClick={goto3dCreator}>• 3d Elivation</p>
      <p onClick={gotoWebDevelopment}>• Web Development</p>
    </div>
  );
}

export default Services;
