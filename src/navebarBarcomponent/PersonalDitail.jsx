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

function DateofBirth() {
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
        <h5>Date of Birth </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Date of Birth</h2>
          <p> 16-10-1979</p>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
function MaritalStatus() {
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
        <h5>Marital Status </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Marital Status</h2>
          <p> Married</p>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
function Languages() {
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
        <h5>Languages </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Languages</h2>
          <ul>
            <li>English (Basic Level)</li>
            <li> Hindi </li>
            <li> Gujarati </li>
            <li>Urdu </li>
          </ul>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
function Hobbies() {
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
        <h5>Hobbies </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>Hobbies</h2>
          <ul>
            <li>Cricket</li>
            <li> Reading </li>
            <li> Learning </li>
            <li>Carom </li>
          </ul>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function PersonalDetail() {
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
        PERSONAL DETAILS
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>Personal Details </h2>

          <DateofBirth />
          <MaritalStatus />
          <Languages />
          <Hobbies />

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
