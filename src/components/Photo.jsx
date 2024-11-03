import { useNavigate } from "react-router-dom";
import "../css/Photo.css";
import React from 'react';



const Photo = () => {

 
    const navigate = useNavigate();
    
    function goToHome() {
      navigate("/");
    }


  return (<>
    <div id="Photo">
      <img id="img" src="./MAYURI1.jpg" alt="img"/>
    
    </div>
      <button onClick={goToHome}>Back</button>
      </>
  )
}

export default Photo
