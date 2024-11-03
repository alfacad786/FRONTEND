


import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "../css/TechnicalSkills.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #500",
  boxShadow: 24,
  pt: 2,
  px: 10,
  pb: 3,
};

function Alfa_Consultant() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <h5> Alfa Consultant </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
        <h2> Alfa Consultant</h2>
        <h6>Full-time, Aug 2016 - Present</h6>
        <p >
        As a self-employed Architectural Consultant at Alfa Consultant, I
        specialize in architecture planning, approval drawing, and serve as a
        Civil Site Consultant. My responsibilities include creating presentation
        drawings, section and electric drawings, and 3D elevation in 3DS MAX
        with VRAY rendering. Additionally, I proficiently utilize AutoCAD for
        planning and 3D work. In my role as a Civil Site Consultant, I handle
        lineout, site visits, checking, estimates, and billing.
      </p>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

function Shahil_Engineer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <h5>Shahil_Engineer</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Shahil_Engineer</h2>
          <h6>Full-time, Aug 2011 - Aug 2016</h6>
          <p >
        
        At Shahil Engineer in Bharuch, I held the position of Civil Engineer,
        contributing my expertise to various projects.
      </p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}


function Freelance () {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <h5>Freelance Architecture 3D_Elevation and Animation</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Freelance Architecture 3D_Elevation and Animation</h2>
          <h6>Part-time, Dec 2003 - Dec 2016</h6>
          <p >        
          I specialized in architecture elevation and animation using "VOKE THRU"
        in 3DS MAX. I also engaged in AutoCAD planning and 3D work.
      
      </p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}


function N_C_V_T () {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <h5>N.C.V.T. (L.A.C.P.) Laboratory Assistant Chemical Plant</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>N.C.V.T. (L.A.C.P.) Laboratory Assistant Chemical Plant</h2>
          <h6>Full-time, 2000</h6>
          <p >        
          At N.C.V.T. “WOCKHARDT Pvt Ltd.” in Ankleshwar, I supported daily
        operations of the chemical plant, conducted chemical analysis and
        testing, operated and maintained laboratory equipment, and adhered to
        strict safety protocols.</p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}








export default function  EXPERIANSE() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
      <Button id="Career_Highlights_Button" onClick={handleOpen}>
        EXPERIANSE
      </Button>
      <Modal
     
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>EXPERIANSE </h2>
          <Alfa_Consultant />
          <Shahil_Engineer />
          <Freelance />
          <N_C_V_T />

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}

