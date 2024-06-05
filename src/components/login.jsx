import React, { useState } from "react";
import "./login.css";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/login");
      const data = await response.json();
      console.log("data=", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login">
      <h3>
        <u>Login Form</u>
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username : </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <label htmlFor="password" >Password : </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />

        <button type="submit">Login up</button>
      </form>
    </div>
  );
};

export default Login;
