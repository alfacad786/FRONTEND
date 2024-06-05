import React, { useState } from "react";
import "./Singup.css";
import { colors } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/login");
      const data = await response.json();
      console.log("data=", data);
    } 
    catch (error) {
      console.error("Error:", error);
    }
   
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Sign Up</button>
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

export default Singup;
