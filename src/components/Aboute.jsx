import "../css//Aboute.css";
import "../css/Quntity.css";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";
import Bottom from "../bottom.jsx";
import { useState } from "react";
import BricksAreaCal from "../Estimat Component/Area.jsx";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import EXCAVATION from "../Estimat Component/Excavation.jsx";
import YELLOW_SOIL_FILING from "../Estimat Component/YelloSoilFilling.jsx";

// function Aboute() {
//   return (
//     <>
//       <Top />
//       <Nabar />
//       <div id="Aboute">
//         <div id="cardabout" >
//           <h1>About Me </h1>

//           "I am a seasoned Civil Engineer and Architectural Planner with over
//           two decades of experience, and a Full Stack Web Developer with over
//           six months of experience. My career has been marked by a steadfast
//           commitment to delivering projects on time, within budget, and to the
//           highest standards of quality and compliance. My diverse skill set
//           spans civil engineering, architectural planning, and modern web
//           development technologies."
        
//         </div>
//         <div id="Career">
//          <span>Career Highlights</span>
//           <EXPERIANSE />
//           <TechnicalSkills />
//           <Education />
//           <PersonalDetail />
//           <Web_Projects />
//           <SocialMedia />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Aboute;

export default function Aboute() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    navigate("/");
  };
  
 
  return (
    <>
      <Top />
      <Nabar />
      <div id="TechnicalSkills">
      {/* <Button onClick={handleOpen}>
          
          </Button> */}
      {/* <div id="Aboute"> */}
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
        <Button onClick={handleClose}>Close </Button>
    
   

      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>Education</h2>

          <EXCAVATION />
          <YELLOW_SOIL_FILING />        

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal> */}
      {/* </div> */}
    </>
  );
}
