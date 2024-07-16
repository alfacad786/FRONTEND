import React, { useState } from "react";
import "./product.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const product = () => {
  const [formData1, setFormData1] = useState({
    bucketName: "",
  });
  // const [formData, setFormData] = useState({
  //   projectName: "",
  //   discription: "",
  //   image: "",
  // });
  // const [image, setImage] = useState(null);

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // ------------------s3-------------
  const handleChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/creatBacket/",formData1);
      const data = res.json();
      (response) => {
        console.log("this is", response.data, "data");
      };
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ------------------image-------------

  // axios
  //   .post("http://localhost:3000/api/product", formData)
  //   // const data = response.json();
  //   .then((response) => {
  //     navigate("/");
  //     console.log("this is", response.data, "data");
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // ------------------image-------------

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // ------------------image-------------

  //   const formData = new FormData();
  //   formData.append("image", image);
  //   // ------------------image-------------
  //   try {
  //     const res = await axios.post("/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     console.log(res.data, "data not found");
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   // ------------------image-------------

  //   // axios
  //   //   .post("http://localhost:3000/api/product", formData)
  //   //   // const data = response.json();
  //   //   .then((response) => {
  //   //     navigate("/");
  //   //     console.log("this is", response.data, "data");
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error:", error);
  //   //   });
  // };

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

      {/* <form onSubmit={handleSubmit}>
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

        ------------------image-------------
        <input type="file" onChange={handleImageChange} placeholder="image" />
        ------------------image-------------

        <input
        type="file"
        name="image"
        value={formData.image}
        onChange={handleImageChange}
        placeholder="image"
      />
        <button type="submit">ADD PRODUCT</button>
      </form> */}
    </>
  );
};

export default product;
