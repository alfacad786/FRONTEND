import React, { useState } from "react";
import "../css/component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import Top from "../Top.jsx";
import Nabar from "../Navbar.jsx";

const HOST_3000 = import.meta.env.HOST_3000;
const CreatBucket = () => {
  const navigate = useNavigate();
  // ------------------s3 create bucket-------------
  const [formData1, setFormData1] = useState({
    bucketName: "",
  });

  const handleChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/creatBacket/"||`${HOST_3000}/api/creatBacket/`,
        formData1
      );
      const data = res.json();
      (response) => {
        console.log("this is", response.data, "data");
      };
    } catch (error) {
      console.error("Error:", error);
    }

    navigate("/");
  };

  return (
    <>
    <Top />
    <Nabar />
    <div className="component">
      <form onSubmit={handleSubmit1} className="form">
        <input
          type="text"
          name="bucketName"
          value={formData1.bucketName}
          onChange={handleChange1}
          placeholder="insert bucketName"
        />
        <button type="submit">ADD bucket</button>
      </form>
    </div>
    </>
  );
};

export default CreatBucket;
