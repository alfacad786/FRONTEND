import { redirect, useLocation, useNavigate } from "react-router-dom";
import "../src/css/Page.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Top from "./Top.jsx";
import Nabar from "./Navbar.jsx";


function CardDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const { Data, id } = location.state || {};

  const { projectName, discription, imageUrl,Key } = Data;
  // const clickedKey = location.state || {};
  console.log("carddetail data:", Data);
  console.log("id:", id);
  console.log("imageUrl:",Data.imageUrl);
  // console.log("carddetail clickedKey:", clickedKey);

  return (
    <>

    <Top />
    <Nabar />
    <div className="CardDetail">
      <h4>{projectName}</h4>
      <div className="CardDetail1">
        <div >
          <img src={imageUrl} alt="img" />
        </div>
        <div className="Detail">
          
          <Button>{projectName} </Button>
          <p>{discription} </p>
          <p>Id:{id} </p>
        </div>
        
      </div>
      <button type="button" className="btn btn-primary" onClick={() =>navigate((-1), id)}>BACK</button>
    </div>
    
    </>
  );
}

export default CardDetail;


