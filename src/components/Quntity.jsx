import "../css/Quntity.css";
import React from "react";
import { useNavigate } from "react-router-dom";
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
export default function Quntitycal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    depth: "",
    rasio: "",
    CivilWork: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <>
      <Top />
      <Nabar />
      <div id="CALCULATOR">
        <Button onClick={handleOpen}>CIVILWORK CALCULATOR</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>Quntitycal</h2>

          <EXCAVATION />
          <YELLOW_SOIL_FILING />
          {/* <YELLOW_SOIL_FILING />

          <P_C_C />

          <R_C_C />

          <BRICKS_WORK />

          <INNER_PLASTER /> */}
          {/* <OUTER_PLASTER />
          <ROOM_FOORING />
          <TOILET_FLOORING />
          <PARKING_FLOORING />
          <STAIR_FLOORING /> */}

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
