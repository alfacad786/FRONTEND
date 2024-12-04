import "../src/css/Card.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// const HOST_3000 = import.meta.env.HOST_3000;

const HOST_3000=import.meta.env.VITE_HOST_3000;
console.log("Current HOST_3000:", HOST_3000,"card.jsx");
function Card() {
 
  const [id, setid] = useState(null);
  const [Data, setData] = useState([]);
  const [Objects, setObjects] = useState([]);
  const navigate = useNavigate();

  // ------------------list from aws s3 bucket-------------
  const [bucket, setbuckets] = useState("aaliya-1721126150278");
  const [bucket_Mumbai, setbuckets_Mumbai] = useState("rizwana-1724849048961");
// temperari close call api ListObject
   
  useEffect(() => {
    axios
  
    // { timeout: 800000 }
    // "http://localhost:3000/api/ListObject/"||`${HOST_3000}/api/ListObject/`
      .get(`${HOST_3000}/api/ListObject/`,{ params: { bucketName: bucket_Mumbai }},{ timeout: 800000 })
      .then((response) => {
        console.log(response.data); // Debugging purpose
        setObjects(response.data);
        // console.log("bucket list:", response.data);
        
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error,error.message, "os");
      });
     
      
  }, []);





  // ------------------read object from aws s3 bucket-------------

  const goToCardDetail = ( Object) => {
    setid(Object.Key);
    console.log(Object.Key);
// ||`${HOST_3000}/api/Read/`
// "http://localhost:3000/api/Read/"
    axios
      .get(`${HOST_3000}/api/Read/`, {
        params: { bucketName: bucket_Mumbai, objectKey:`${Object.Key}`},
      })
      // const data = response.json();
      .then((response) => { 
        setData(response.data.data);
        console.log("THIS", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });




    // console.log("formData:", formData);
    // console.log("onClick key:", key, "/n", "onClick Data:", Data);
  };


  // console.log("dATA*:", Data, "***"); //
  // console.log("dATA##:", Data, "###");

  
  useEffect(() => {
    if (Data && id) {
      navigate("/CardDetail", { state: {Data, id} });
      console.log("Navigating to CardDetail with data:", Data ,"clickedKey:",id);
    }
  }, [Data, id]);








  const car = Objects.map((Object) => (
    <div id="Card" key={Object.Key} onClick={() => goToCardDetail(Object)}>
      {/* <p style={{ color: "white" }}>{Object.Key} </p> */}
      <img src={Object.imageUrl} alt="image" />
      {/* <p>{Object.projectName}</p> */}
      {/* <p>{Object.discription}</p> */}
    </div>
  ));

  // return < >{Items }</>;
  return <>{car}</>;
}

export default Card;


