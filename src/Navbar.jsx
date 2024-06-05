import "./Navbar.css";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nabar() {
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
  function goTosingup() {
    navigate("/singup");
  }
  function goTologinup() {
    navigate("/login");
  }


  return (
    <div className="navbar">
      <button onClick={goToHome}>Home</button>     
      <button onClick={goToAboute}>Aboute</button>
      {/* <Link to="/Aboute">About</Link> */}
      <button onClick={goToContect}>Contect</button>
      <button onClick={goToProduct}>Product</button>
      <button onClick={goToWeather}>Weather</button>
      <button onClick={goTosingup}>singup</button>
      <button onClick={goTologinup}>loginup</button>
    </div>
  );
}
export default Nabar;
