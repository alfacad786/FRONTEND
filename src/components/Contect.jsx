import "../css/Aboute.css";
import React from "react";
import { Text } from "@chakra-ui/react";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";
import Bottom from "../bottom.jsx";
function Contect() {
  return (
    <>
      <Top />
      <Nabar />
      <div id="Aboute">
        <div id="cardabout">
          <h4>Contect page </h4>

          <div id="contect">
            <div id="c2">
              <h5>Address</h5>
              <p>Asifiqbal Shaikh </p>
              <p> F-3,Lakdawala Heights,</p>
              <p>Shoping Complex, Mohammedpura,</p>
              <p>BHARUCH.392001.</p>
            </div>
            <div id="c1">
              <h6>Email</h6>
              <a href="mailto:alfacad786@gmail.com">alfacad786@gmail.com</a>
              <a href="mailto:alfa_cad786@yahoo.com">alfa_cad786@yahoo.com</a>
            </div>
            <div id="c1">
              <h6>Mobile</h6>
              <a href="tel:+91 9426882690">+91 9426882690</a>
              <a href="tel:+91 7016196449"> +91 7016196449</a>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
}

export default Contect;
