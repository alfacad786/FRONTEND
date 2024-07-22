import { redirect, useLocation ,useNavigate} from "react-router-dom";
import "./Page.css";
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


function CardDetail() {
  const navigate = useNavigate();
  const location = useLocation();
    // ------------------list from mongodb bucket---------------
  // const { id, products } = location.state || {};

  //  console.log(id,products);

  // const Items = products.filter((products) => products._id == id);
 
  // console.log(Items[0]);

  // function onClick (id) {
  //   navigate("/", { state: { id } });
  // }

 // ------------------list from aws s3 bucket-------------
 
 const Data  = location.state || {};
 const clickedKey  = location.state || {};
 console.log("carddetail data:",Data);
 console.log("carddetail clickedKey:",clickedKey);
//  const CardDetail = Object.filter((Object) => Object._id == key);

//  console.log(Items[0]);

//  function onClick (key) {
//    navigate("/", { state: { key } });
//  }



// const [formData, setFormData] = useState({
//   bucketName: bucket,
//   objectKey: key,
// });
// const [Data, setData] = useState([]);
// if (bucket && key) {
//   axios
//       .get("http://localhost:3000/api/Read/",  { params: formData })

//       // const data = response.json();
//       .then((response) => {
//         console.log("this is", response.data, "data");

//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//     // console.log("formData:", formData);
//     console.log("dATA*:",Data,"***");
//     // navigate("/Product");
  
// }





  return (<>
  
  <h4 ><u style={{color:"white"}}>key</u></h4>
  <p>{Data.projectName}</p>
  <p>{Data.discription}</p>
  <p>{Data.image}</p>
  </>
    // <div className="CardDetail">
    //   <h4>{Data.projectName}</h4>
    //   <div className="CardDetail1">
    //     <div className="imagdiv"><img src={Data.image} alt="img" /></div>
    //     <div className="Detail">
    //       <button >{Data.projectName} </button>
    //       <p>Id:{clickedKey} </p>
    //       <p>{Data.discription} </p>
    //       {/* <a href={Items[0].image}>link</a>{" "} */}
    //     </div>
    //   </div>
    //   <button onClick={()=>onClick(clickedKey)} >BACK</button>
    // </div>
  );
}

export default CardDetail;



