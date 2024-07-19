import React, { useState, useEffect } from "react";
import "./component.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const List_Object = () => {
  const navigate = useNavigate();

  // ------------------s3 list  bucket-------------
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ListObject/")
      .then((response) => {
        setProducts(response.data);
        // console.log("this:", response.data, "from bucket list");
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error);
      });
  }, []);

  // ------------------s3 list  object-------------
  const [formData, setFormData] = useState({
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("aa", formData, "chhe");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000/api/READ/", formData)
      // const data = response.json();
      .then((response) => {
        // navigate("/");
        console.log("this is", response.data, "data");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search">
        BUCKET NAME:
        <select name="bucketName" onChange={handleChange}>
          <option >select</option>
          {products.map((p) => (
            <option  value={p.Name} key={p.CreationDate}>{p.Name}</option>
          ))}

          {/* {Buckets.map((b) => ` • ${b.Name}`).join("\n")} */}
        </select>
      </div>
      <button type="submit">list object</button>
    </form>
  );
};

export default List_Object;
