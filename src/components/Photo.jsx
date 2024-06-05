import { useNavigate } from "react-router-dom";
import "./Photo.css";
import React from 'react';



const Photo = () => {

 
    const navigate = useNavigate();
    
    function goToHome() {
      navigate("/");
    }


  return (
    <div className="Photo">
      <img src="./MAYURI1.jpg" alt="img"/>
      <button onClick={goToHome}>Back</button>
    </div>
  )
}

export default Photo
