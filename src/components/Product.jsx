import React, { useState } from "react";
import "./product.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const product = () => {

  const [formData, setFormData] = useState({
    projectName: "",
    discription: "",
    image: "",
  });
  // const [image, setImage] = useState(null);

  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// ------------------image-------------
//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
// };
// ------------------image-------------



  const handleSubmit = async (e) => {
    e.preventDefault();
// ------------------image-------------

    // const formData = new FormData();
    // formData.append('image', image);
// ------------------image-------------
// try {
//   const res = await axios.post('/upload', formData, {

//       headers: {
//           'Content-Type': 'multipart/form-data'
//       }
//   });

//   console.log(res.data);
// } catch (err) {
//   console.error(err);
// }
// ------------------image-------------

   axios.post("http://localhost:3000/api/product", formData,)
      // const data = response.json();
     .then(response=>{
      
      navigate("/")
      console.log("this is",response.data,"data")
     
    }). catch (error=>{
      console.error("Error:", error);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        placeholder="projectName"
      />
      <input
        type="text"
        name="discription"
        value={formData.discription}
        onChange={handleChange}
        placeholder="discription"
      />


  
   

       {/* ------------------image------------- */}
       {/* <input type="file" onChange={handleImageChange} placeholder="image" /> */}
       {/* ------------------image------------- */}




      <input
        type="file"
        name="image"
       
        onChange={handleChange}
        placeholder="image"
      />
      <button type="submit">ADD PRODUCT</button>
    </form>

    //   <div className="newaddform">
    //   <form  method="post" action="http://localhost:8080/api/signup/" className="signupform">
    //     <div className="subdiv">
    //       <div>
    //       <label htmlFor="username">userName :</label>
    //       <input name="username" type="text" id="username" className="inp" />
    //       </div>
    //       <div>
    //       <label htmlFor="name">name :</label>
    //       <input name="name" type="text" id="name" className="inp" />
    //       </div>
    //       <div>
    //       <label htmlFor="email">Email :</label>
    //       <input name="email" type="email" id="email" className="inp" />
    //       </div>
    //       <div>
    //       <label htmlFor="city"> city : </label>
    //       <input name="city" type="text" id="city" className="inp" />
    //       </div>
    //     </div>
    //     <div className="subdiv">

    //       <div>
    //       <label htmlFor="password" >password :</label>
    //       <input name="password" type="password" id="password" className="inp" />
    //       </div>
    //       <div>
    //       <label htmlFor="mobile"> Mobile : </label>
    //       <input name="mobile" type="number" id="mobile" className="inp" />
    //       </div>
    //       <div>
    //       <label htmlFor="area"> area : </label>
    //       <input name="area" type="text" id="area" className="inp" />
    //       </div>

    //     </div>

    //     <button className="=btn" type="submit">
    //       singup
    //     </button>
    //   </form>

    //   <div id="btn">
    //     <form method="get" action="/">
    //       <button className="=btn" type="submit">
    //         BACK
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default product;
