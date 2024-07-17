import React, { useState } from "react";
import "./login.css";
import Add_Object from "./Add_Object";
import CreatBucket from "./createBacket";
import List_Bucket from "./List_Bucket";

const product = () => {
  return (
    <div className="product" >
      <CreatBucket  />
      <Add_Object />
      <List_Bucket />
    </div>
  );
};

export default product;
