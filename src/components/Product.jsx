import React, { useState } from "react";
import "./product.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const product = () => {
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
        "http://localhost:3000/api/creatBacket/",
        formData1
      );
      const data = res.json();
      (response) => {
        console.log("this is", response.data, "data");
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
    <>
      <form onSubmit={handleSubmit1}>
        <input
          type="text"
          name="bucketName"
          value={formData1.bucketName}
          onChange={handleChange1}
          placeholder="insert bucketName"
        />
        <button type="submit">ADD bucket</button>
      </form>

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

        <input
          type="file"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="image"
        />
        <button type="submit">ADD PRODUCT</button>
      </form>
    </>
  );
};

export default product;
