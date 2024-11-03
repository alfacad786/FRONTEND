import React, { useState } from "react";
import "../css/Weather.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import WeatherSearch from "./weathersearch";
import WeatherData from "./watherdata";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";




export default function Weather() {
 

  let [data,setnewdata]=useState("");
  let [erre,seterr]=useState("");
let update=(newinfo)=>{
  setnewdata(newinfo);
}
let err=(newinfo)=>{
  seterr(newinfo);
}
 

  return ( 
    <>
    <Top />
    <Nabar />
   
     
    
     <WeatherSearch update={update} err={err}/>
     <WeatherData data={data} erre={erre}/>      
    
    </>
  );
}
