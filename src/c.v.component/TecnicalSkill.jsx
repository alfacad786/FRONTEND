import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "../css/TechnicalSkills.css";

function CivilEngineering_ArchitecturalPlanning() {
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
        <h6>Civil Engineering & Architectural Planning</h6>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Civil Engineering & Architectural Planning</h2>
          <p>
            <ul>
              <li>AutoCAD</li>
              <li>3DS MAX </li>
              <li> VRAY </li>
              <li>Presentation Drawings </li>
              <li>Section & Electric Drawings </li>
              <li>Lineout </li>
              <li>Site Visit </li>
              <li> Checking </li>
              <li> Estimate </li>
              <li>Billing </li>{" "}
            </ul>
          </p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
function ProjectManagement() {
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
        <h6>Project Management</h6>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Project Management</h2>
          <p> MS Excel, MS Word, Tally, PageMaker, Photoshop </p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
function WebDevelopment() {
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
        <h6>Web Development</h6>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Web Development</h2>
          <p>
            HTML5, CSS, JavaScript, Node.js, Express.js, SQL, MongoDB, Mongoose,
            Git, GitHub, React.js, Redux, Redux Toolkit, Tailwind -
          </p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function TechnicalSkills() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <div >
    <>
      <Button id="Career_Highlights_Button" onClick={handleOpen}>
        Technical Skills
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>Technical Skills</h2>

          <CivilEngineering_ArchitecturalPlanning />

          <ProjectManagement />

          <WebDevelopment />

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
    // </div>
  );
}
