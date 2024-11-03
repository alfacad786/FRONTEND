// import React, { useState } from "react";
// import "./component.css";
// import { colors } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Add_Object = () => {
//   const navigate = useNavigate();

//   // ------------------s3 insert data in bucket-------------
//   const [formData, setFormData] = useState({
//     projectName: "",
//     discription: "",
//     image: "",
//   });
  

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:3000/api/UPDATE", formData)
//       // const data = response.json();
//       .then((response) => {
//         navigate("/");
//         console.log("this is", response.data, "data");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };
//   return (
//     <div className="component">
   
//     <form onSubmit={handleSubmit} className="form">
   
//       <input
//         type="text"
//         name="projectName"
//         value={formData.projectName}
//         onChange={handleChange}
//         placeholder="projectName"
//       />
//       <input
//         type="text"
//         name="discription"
//         value={formData.discription}
//         onChange={handleChange}
//         placeholder="discription"
//       />

//       <input
//         type="file"
//         name="image"
//         value={formData.image}
//         onChange={handleChange}
//         placeholder="image"
//       />
//       <button type="submit">ADD Object</button>
//     </form>
//     </div>
//   );
// };

// export default Add_Object;
// ===========================================================================
import React, { useState } from "react";
import "../css/component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Button from "@mui/material";
import { Button, Input, Text } from "@chakra-ui/react";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";






const Add_Product = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------

  const validFileType = ["image/jpeg", "image/jpg", "image/png", "image/pdf"];
  const [error, setError] = useState("");
  const [Image, setImage] = useState("");

  // const [formData, setFormData] = useState({
  //   image: "",
  // });
  const [formData, setFormData] = useState(new FormData());

  const handleUpload = (e) => {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    console.log(file.path);
    if (!validFileType.find((type) => type === file.type)) {
      setError("File must be jpeg/jpg/png/pdf  format");
      return;
    }
    // setImage(file);
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.files[0],
    // });
    // setFormData({ [e.target.name]: file.name });
    formData.set("image", file);
  };
  const handleChange = (e) => {
    formData.set(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/UPDATE", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      .then((response) => {
        console.log("this is", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigate("/");
  };

  return (
    <>
    <Top />
    <Nabar />
    <div className="component">
      <form onSubmit={handleSubmit} className="form">
      
        <div>
          <label htmlFor="image">Image :</label>
          <input name="image" type="file" id="image" required onChange={handleUpload} className="inp" />

          {error && <Text color="red.500">{error}</Text>}
        </div>

        <div>
          <label htmlFor="projectName">projectName:</label>
          <input name="projectName" type="text" id="projectName" required onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="discription">discription:</label>
          <input name="discription"  required type="text" id="discription" onChange={handleChange} className="inp" />
        </div>
        {/* <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" id="name" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input name="address" type="text" id="address" onChange={handleChange} className="inp" />
        </div>
        <div>
          <label htmlFor="mobileno">Mobile No:</label>
          <input name="mobileno" type="text" id="mobileno" onChange={handleChange} className="inp" />
        </div> */}

        <button type="submit">submit</button>
      </form>
    </div>
    </>
  );
};

export default Add_Product;

