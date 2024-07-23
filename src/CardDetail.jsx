import { redirect, useLocation, useNavigate } from "react-router-dom";
import "./Page.css";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CardDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const Data = location.state || {};
  const data = Data.Data;
  const id = Data.id;
  // const clickedKey = location.state || {};
  console.log("carddetail data:", data);
  console.log("id:", id);
  // console.log("carddetail clickedKey:", clickedKey);

  return (
    <div className="CardDetail">
      <h4>{data.projectName}</h4>
      <div className="CardDetail1">
        <div className="imagdiv">
          <img src={data.image} alt="img" />
        </div>
        <div className="Detail">
          <button>{data.projectName} </button>
          <p>{data.discription} </p>
          <p>Id:{id} </p>
        </div>
      </div>
      <button onClick={() =>navigate((-1), id)}>BACK</button>
    </div>
  );
}

export default CardDetail;

{
  /* <p>Id:{clickedKey} </p> */
}
// { state: Data });clickedKey
