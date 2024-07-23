import React, { useState } from "react";
import "./component.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add_User = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------
  const [formData, setFormData] = useState({
    Name: "",
    Mobile: "",
    Email: "",
    UserName: "",
    Password: "",
    Image: "",
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
      .post("http://localhost:3000/api/newUser/", formData)
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
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="Mobile"
          value={formData.Mobile}
          onChange={handleChange}
          placeholder="Mobile"
        />
          <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Email"
        />
           <input
          type="text"
          name="UserName"
          value={formData.UserName}
          onChange={handleChange}
          placeholder="UserName"
        />
              <input
          type="text"
          name="Password"
          value={formData.Password}
          onChange={handleChange}
          
          placeholder="Password"
        />

        <input
          type="file"
          name="Image"
          value={formData.Image}
          onChange={handleChange}
          placeholder="Image"
        />
        <button type="submit">SIGNUP</button>
      </form>
    </div>
  );
};

export default Add_User;
