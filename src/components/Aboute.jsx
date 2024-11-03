import "../css//Aboute.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Experience from "../c.v.component/Experience.jsx";
import TechnicalSkills from "../c.v.component/TecnicalSkill.jsx";
import Education from "../c.v.component/Education.jsx";
import PersonalDetail from "../c.v.component/PersonalDitail.jsx";
import Web_Projects from "../c.v.component/WebProjects.jsx";
import SocialMedia from "../c.v.component/SocialMedia.jsx";
import EXPERIANSE from "../c.v.component/Experience.jsx";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";

function Aboute() {
  return (
    <>
      <Top />
      <Nabar />
      <div id="Aboute">
        <div id="cardabout" >
          <h1>About Me </h1>

          "I am a seasoned Civil Engineer and Architectural Planner with over
          two decades of experience, and a Full Stack Web Developer with over
          six months of experience. My career has been marked by a steadfast
          commitment to delivering projects on time, within budget, and to the
          highest standards of quality and compliance. My diverse skill set
          spans civil engineering, architectural planning, and modern web
          development technologies."
        
        </div>
        <div id="Career">
         <span>Career Highlights</span>
          <EXPERIANSE />
          <TechnicalSkills />
          <Education />
          <PersonalDetail />
          <Web_Projects />
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default Aboute;
