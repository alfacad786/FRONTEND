import React, { useState } from "react";
import "./component.css";
import Add_Object from "./Add_Object";
import CreatBucket from "./createBacket";
import List_Bucket from "./List_Bucket";
import List_Object from "./List_object";
import Object from "./object";

const product = () => {
  return (
    <div className="product" >
      <CreatBucket  />
      <Add_Object />
      <List_Bucket />
      <List_Object />
      <Object />
    </div>
  );
};

export default product;
