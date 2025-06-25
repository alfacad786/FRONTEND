import "../src/css/Navbar.css";
import "./css//Aboute.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TechnicalSkills from "./c.v.component/TecnicalSkill.jsx";
import Education from "./c.v.component/Education.jsx";
import PersonalDetail from "./c.v.component/PersonalDitail.jsx";
import Web_Projects from "./c.v.component/WebProjects.jsx";
import SocialMedia from "./c.v.component/SocialMedia.jsx";
import EXPERIANSE from "./c.v.component/Experience.jsx";
import About from "./navebarBarcomponent/About.jsx";
function Nabar() {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  function goToAboute() {
    navigate("/Aboute/");
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
  function goTocreatbucket() {
    navigate("/CreatBucket");
  }
  // function goToAdd_Product() {
  //   navigate("/Add_Product");
  // }
  function goToAdd_Object() {
    navigate("/Add_Object");
  }
  function goToAdd_User() {
    navigate("/Add_User");
  }
  function goToMUI() {
    navigate("/MUI");
  }
  function goToQUNTITY() {
    navigate("/QUNTITY");
  }

  return (
    <div className="navbar">
      {/* <button onClick={goToHome}>Home</button>     
      <button onClick={goToAboute}>Aboute</button>
     
      <button onClick={goToContect}>Contect</button>
      <button onClick={goToProduct}>Add Bucket</button>
      <button onClick={goToWeather}>Weather</button>
      <button onClick={goTosingup}>singup</button>
      <button onClick={goTologinup}>loginup</button>
      <button onClick={goTocreatbucket}>CreatBucket</button> */}
      {/* <button onClick={goToAdd_Product}>Add_Product</button> */}
      {/* <button onClick={goToAdd_Object}>Add_3dProject</button>
      <button onClick={goToAdd_User}>Add_User</button>
      <button onClick={goToMUI}>MUI</button>
      <button onClick={goToQUNTITY}>QUNTITY</button> */}
      <button onClick={goToAdd_Object}>Add_3dProject</button>
      <EXPERIANSE />
        <About />
        {/* <Education /> */}
        <PersonalDetail />
        <Web_Projects />
        <SocialMedia />
    </div>
  );
}
export default Nabar;
