import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import "../css/TechnicalSkills.css";

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

function About() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div id="cardabout">
        <h1>About Me </h1>
        "I am a seasoned Civil Engineer and Architectural Planner with over two
        decades of experience, and a Full Stack Web Developer with over six
        months of experience. My career has been marked by a steadfast
        commitment to delivering projects on time, within budget, and to the
        highest standards of quality and compliance. My diverse skill set spans
        civil engineering, architectural planning, and modern web development
        technologies."
      </div>    
    </React.Fragment>
  );
}

export default function Education() {
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
        About Me
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box id="TechnicalSkills">
          <About />
          <Button onClick={handleClose}>Close </Button>
        </Box>
      </Modal>
    </>
  );
}
