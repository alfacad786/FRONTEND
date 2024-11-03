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
// function Quntitycal() {
//   const navigate = useNavigate();
//   const [Area, setArea] = useState();
//   const [Bricks, setBricks] = useState();
//   const [CivilWork, setCivilWork] = useState();
//   const [Rasio, setRasio] = useState();
//   const [Cement, setCement] = useState();
//   const [Send, setSend] = useState();
//   const [Agriggat, setAgriggat] = useState();
//   const [formData, setFormData] = useState({
//     height: "",
//     weight: "",
//     depth: "",
//     rasio: "",
//     CivilWork:"",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     console.log(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:3000/api/QuntityCalculator/",
//         {
//           method: "post",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("***", data.resio[4], "***");
//       setArea(data.area);
//       setCivilWork(data.resio[0].CivilWork);
//       setRasio(data.resio[1].resio);
//       setCement(data.resio[2].cement);
//       setSend(data.resio[3].send);
//       setAgriggat(data.resio[4].Agriggat);
//       setBricks(data.resio[5]);
//       const area = data.area;
//       // navigate("/login");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <Top />
//       <Nabar />
//       {/* <CardList/> */}

//       <div id="quntity">
//         <h5>estimate calculator for civil work</h5>
//         <form onSubmit={handleSubmit} id="form">
//           <div>
//         <label htmlFor="CivilWork">CivilWork  :</label>

//         <select
//             name="CivilWork"
//             id="select"
//             value={formData.search}
//             onChange={handleChange}
//           >
//             <option value="EXCAVATION">EXCAVATION</option>
//             <option value="YELLOW_SOIL_FILING">YELLOW SOIL FILING</option>
//             <option value="P.C.C.">P.C.C.</option>
//             <option value="R.C.C.">R.C.C.</option>
//             <option value="BRICKS_WORK">BRICKS WORK</option>
//             <option value="INNER_PLASTER">INNER PLASTER</option>
//             <option value="OUTER_PLASTER">OUTER PLASTER</option>
//             <option value="ROOM_FOORING">ROOM FOORING</option>
//             <option value="TOILET_FLOORING">TOILET FLOORING</option>
//             <option value="PARKING_FLOORING">PARKING FLOORING</option>
//             <option value="STAIR_FLOORING">STAIR FLOORING</option>
//           </select>
//           </div>
//           <div>
//           <label htmlFor="rasio">rasio  :</label>
//           <select
//             name="rasio"
//             id="select"
//             value={formData.search}
//             onChange={handleChange}

//           >
//             <option value="M5">1:5:10</option>
//             <option value="M7.5">1:4:8</option>
//             <option value="M10">1:3:6</option>
//             <option value="M15">1:2:4</option>
//             <option value="M20">1:1.5:3</option>
//             <option value="M25">1:1:2</option>
//             <option value="M30">heigh</option>
//           </select>
//           </div> <div>
//           <label htmlFor="height">height  :</label>
//           <input
//             type="text"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             placeholder="Height in Foot"
//             aria-label="height"
//           />
//            </div> <div>
//           <label htmlFor="weight">weight  :</label>
//           <input
//             type="text"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             placeholder="Weight in Foot"
//           />
//            </div> <div>
//           <label htmlFor="depth">depth  :</label>
//           <input
//             type="text"
//             name="depth"
//             value={formData.depth}
//             onChange={handleChange}
//             placeholder="Depth in Foot"
//           />
//           </div>

//           <button type="submit">submit</button>
//         </form>

//         <p id="Home">
//          Insert All Dimention In Foot
//         </p>
//       </div>

//       <BricksAreaCal
//         area={Area}
//         Bricks={Bricks}
//         Rasio={Rasio}
//         CivilWork={CivilWork}
//         Cement={Cement}
//         Send={Send}
//         Agriggat={Agriggat}

//       />

//       <Bottom />
//     </>
//   );
// }

// export default Quntitycal;

//************************************************* */

// function EXCAVATION() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5>EXCAVATION</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2>MERN_Full_Stack_Web_Development</h2>
//           <p>APNA College (Online), 2024</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }
// function YELLOW_SOIL_FILING() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5> YELLOW_SOIL_FILING</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2> Diploma_in_Civil_Engineering</h2>
//           <p>Technical Examinations Board, Gujarat State, Gandhinagar, 2011</p>
//           <p>(D.L.M)</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }
// function P_C_C() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5>P.C.C</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2>Higher Secondary School Certificate (H.S.C.)</h2>
//           <p>Gujarat Secondary Education Board, Gandhinagar, 2001</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }

// function R_C_C() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5>R.C.C</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2>Laboratory Assistant Chemical Plant</h2>
//           <p>Gujarat Secondary Education Board, Ghandhinager, 1999</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }

// function BRICKS_WORK() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5>BRICKS_WORK</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2>Secondary School Certificate (S.S.C.)</h2>
//           <p>Gujarat Secondary Education Board, Gandhinagar, 1995</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }

// function INNER_PLASTER() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         <h5>INNER_PLASTER</h5>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <div id="TechnicalSkillschild">
//           <h2>Diploma in Computer Application</h2>
//           <p>M.K. College of Commerce, Bharuch, 1995</p>
//           <Button onClick={handleClose}>Close </Button>
//         </div>
//       </Modal>
//     </React.Fragment>
//   );
// }

//==============================================//
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
          <h2>Education</h2>

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
