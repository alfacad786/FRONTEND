import "../css/Quntity.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import BricksAreaCal from "./Area.jsx";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";
import Bottom from "../bottom.jsx";

export default function YELLOW_SOIL_FILING() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function Quntitycal() {
    const navigate = useNavigate();
    const [Area, setArea] = useState();
    const [Bricks, setBricks] = useState();
    const [CivilWork, setCivilWork] = useState();
    const [Rasio, setRasio] = useState();
    const [Cement, setCement] = useState();
    const [Send, setSend] = useState();
    const [Agriggat, setAgriggat] = useState();
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "http://localhost:3000/api/YELLOW_SOIL_FILING/",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("***", data.resio[4], "***");
        setArea(data.area);
        setCivilWork(data.resio[0].CivilWork);
        setRasio(data.resio[1].resio);
        setCement(data.resio[2].cement);
        setSend(data.resio[3].send);
        setAgriggat(data.resio[4].Agriggat);
        setBricks(data.resio[5]);
        const area = data.area;
        // navigate("/login");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return (
      <>
        {/* <CardList/> */}

        <div id="quntity">
          <h5>estimate calculator for civil work</h5>
          <div id="Qun_Center">
            <form onSubmit={handleSubmit} id="form">
              {/* <div>
          <label htmlFor="CivilWork">CivilWork  :</label>
          
          <select
              name="CivilWork"
              id="select"
              value={formData.search}
              onChange={handleChange}
            >
              <option value="EXCAVATION">EXCAVATION</option>
              <option value="YELLOW_SOIL_FILING">YELLOW SOIL FILING</option>            
              <option value="P.C.C.">P.C.C.</option>
              <option value="R.C.C.">R.C.C.</option>
              <option value="BRICKS_WORK">BRICKS WORK</option>
              <option value="INNER_PLASTER">INNER PLASTER</option>
              <option value="OUTER_PLASTER">OUTER PLASTER</option>
              <option value="ROOM_FOORING">ROOM FOORING</option>
              <option value="TOILET_FLOORING">TOILET FLOORING</option>
              <option value="PARKING_FLOORING">PARKING FLOORING</option>
              <option value="STAIR_FLOORING">STAIR FLOORING</option>
            </select>
            </div> */}
              {/* <div>
            <label htmlFor="rasio">rasio  :</label>
            <select
              name="rasio"
              id="select"
              value={formData.search}
              onChange={handleChange}
              
            >
              <option value="M5">1:5:10</option>
              <option value="M7.5">1:4:8</option>
              <option value="M10">1:3:6</option>
              <option value="M15">1:2:4</option>
              <option value="M20">1:1.5:3</option>
              <option value="M25">1:1:2</option>
              <option value="M30">heigh</option>
            </select>
            </div>  */}
              <div>
                <label htmlFor="height">height :</label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Height in Foot"
                  aria-label="height"
                />
              </div>{" "}
              <div>
                <label htmlFor="weight">weight :</label>
                <input
                  type="text"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Weight in Foot"
                />
              </div>{" "}
              <div>
                <label htmlFor="depth">depth :</label>
                <input
                  type="text"
                  name="depth"
                  value={formData.depth}
                  onChange={handleChange}
                  placeholder="Depth in Foot"
                />
              </div>
              <p id="Home">Insert All Dimention In Foot</p>
              <button type="submit">submit</button>
            </form>
            <div id="area">
              <h5>area of {CivilWork}</h5>

              <p>Area={Area} ft3</p>
              {/* <p>bricks={Bricks} NO.</p> */}

              {/* <p>Rasio={Rasio} sqft</p> */}
              {/* <p>cement={Cement} sqft</p>
        <p>Send={Send} sqft</p>
        <p>Agriggat={Agriggat} sqft</p> */}
            </div>
          </div>
        </div>

        {/* 
        <BricksAreaCal
          area={Area}
          // Bricks={Bricks}
          // Rasio={Rasio}
          // CivilWork={CivilWork}
          // Cement={Cement}
          // Send={Send}
          // Agriggat={Agriggat}
        /> */}
      </>
    );
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <h5>YELLOW SOIL FILLING</h5>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div id="TechnicalSkillschild">
          <h2>YELLOW SOIL FILLING</h2>
          <Quntitycal />
          <p>Thank you for visit</p>
          <Button onClick={handleClose}>Close </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
