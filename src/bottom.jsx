
import "./Navbar.css";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Bottom() {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  function goToAboute() {
    navigate("/Aboute");
  }

  function goToContect() {
    navigate("/Contect");
  }
  
  function goToProduct() {
    navigate("/Product");
  }
  function goToWeather() {
    navigate("/Weather");
  }


  return (
    <div className="bottom">
      <button onClick={goToHome}>Home</button>     
      <button onClick={goToAboute}>Aboute</button>
      {/* <Link to="/Aboute">About</Link> */}
      <button onClick={goToContect}>Contect</button>
      <button onClick={goToProduct}>Product</button>
      <button onClick={goToWeather}>Weather</button>
      
    </div>
  );
}
export default Bottom;
