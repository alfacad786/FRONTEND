import { redirect, useLocation, useNavigate } from "react-router-dom";
import "./Page.css";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";


function CardDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const { Data, id } = location.state || {};
  const { projectName, discription, imageUrl } = Data;
  // const clickedKey = location.state || {};
  console.log("carddetail data:", Data);
  console.log("id:", id);
  // console.log("carddetail clickedKey:", clickedKey);

  return (
    <>
    <div className="CardDetail">
      <h4>{projectName}</h4>
      <div className="CardDetail1">
        <div className="imagdiv">
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


