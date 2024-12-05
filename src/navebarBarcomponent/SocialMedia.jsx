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

function LinkedIn() {
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
        <h5> LinkedIn </h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2> LinkedIn Asifiqbal Shaikh on LinkedIn</h2>
          <a href="https://www.linkedin.com/in/asifiqbal-shaikh-99440218" target="_blank">
            https://www.linkedin.com/in/asifiqbal-shaikh-99440218
          </a>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

function Facebook() {
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
        <h5>facebook</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2> facebook</h2>
          <a href="https://www.facebook.com/ALFACONSULTONCY?mibextid=ZbWKwL" target="_blank">
            ALFACONSULTONCY
          </a>

          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default function SocialMedia() {
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
        Social Media
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <h2>SocialMedia </h2>
          <LinkedIn />
          <Facebook />

          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
