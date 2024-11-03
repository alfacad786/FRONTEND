import * as React from "react";
import "../css/Aboute.css";
import ProjectPhoto from "./imagebar.jsx";
import Services from "./service.jsx";
import Button from "@mui/material/Button";
import { background, Center } from "@chakra-ui/react";
import { blue } from "@mui/material/colors";
import TechnicalSkills from "../c.v.component/TecnicalSkill.jsx";
import Education from "../c.v.component/Education.jsx";
import PersonalDetail from "../c.v.component/PersonalDitail.jsx";
import Web_Projects from "../c.v.component/WebProjects.jsx";
import SocialMedia from "../c.v.component/SocialMedia.jsx";
import EXPERIANSE from "../c.v.component/Experience.jsx";
import Nabar from "../Navbar.jsx";

export default function HomeBody() {
  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }
  const [checked, setChecked] = React.useState([]);

  const handleCheckedRight = () => {
    let img = document.getElementById("img");
    console.log(img);
    return (img.style.position = -500);
  };

  const handleCheckedLeft = () => {};
  return (
    <div id="Aboute">
      <div id="HomeBody">
        <ProjectPhoto />
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
  );
}
