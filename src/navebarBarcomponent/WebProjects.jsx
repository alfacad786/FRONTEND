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

function Backend_Project_1() {
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
        <h5> Backend Project 1 </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2> Backend Project 1</h2>
          <a href="https://github.com/alfacad786/backend-project1.git">
            backend-project1.git
          </a>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

function Delta_2_0() {
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
        <h5> Delta 2.0</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2> Delta 2.0</h2>

          <a href="https://github.com/alfacad786/delta-2.0.git">
            https://github.com/alfacad786/delta-2.0.git
          </a>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

function React_Project() {
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
        <h5>React Project</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>React Project</h2>

          <a href="https://github.com/alfacad786/ReactProject.git">
            https://github.com/alfacad786/ReactProject.git
          </a>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function Web_Projects() {
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
        Web Projects
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>Web Projects </h2>

          <Backend_Project_1 />
          <Delta_2_0 />
          <React_Project />

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
