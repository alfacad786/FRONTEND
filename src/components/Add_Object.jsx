import React, { useState } from "react";
import "./component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add_Object = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------
  const [formData, setFormData] = useState({
    projectName: "",
    discription: "",
    image: "",
  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/UPDATE", formData)
      // const data = response.json();
      .then((response) => {
        navigate("/");
        console.log("this is", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="component">
   
    <form onSubmit={handleSubmit} className="form">
   
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

      <input
        type="file"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="image"
      />
      <button type="submit">ADD Object</button>
    </form>
    </div>
  );
};

export default Add_Object;
