import React, { useState, useEffect } from "react";
import "../css/component.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const HOST_3000 = import.meta.env.HOST_3000;
const List_Object = () => {
  const navigate = useNavigate();

  // ------------------s3 list  bucket-------------
  const [buckets, setbuckets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ListBuckets/"||`${HOST_3000}/api/ListBuckets/`)
      .then((response) => {
        setbuckets(response.data);
        // console.log("this:", response.data, "from card");
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    bucketName: "",
    objectKey: "",
  });
  const [Object, setObjects] = useState([]);
  // console.log("object:", Object);
  // Handle changes to the select element

  // ------------------handleChange-------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData, [name]: value };
      // console.log("Updated formData:", newFormData);
      // console.log("value:",value.key);
      return newFormData;
    });

    if (name === "bucketName" && value) {
      axios
        .get("http://localhost:3000/api/ListObject/"||`${HOST_3000}/api/ListObject/`, {
          params: { bucketName: value },
        })
        .then((response) => {
          setObjects(response.data);
          console.log("bucket list:", response.data);
        })
        .catch((error) => {
          console.log("thar was an error fetching the data", error, "os");
        });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => {
  //     const newFormData = { ...prevFormData, [name]: value };
  //     console.log("Updated formData:", newFormData);
  //     return newFormData;
  //   });

  //   // If bucket name is changed, fetch the objects from the selected bucket
  //   if (name === "bucketName" && value) {
  //     axios
  //       .get("http://localhost:3000/api/ListObjects", { params: { bucketName: value } })
  //       .then((response) => {
  //         setObjects(response.data);
  //       })
  //       .catch((error) => {
  //         console.log("There was an error fetching the objects", error);
  //       });
  //   }
  // };

  // ------------------handleSubmit-------------
  const [Data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000/api/Read/"||`${HOST_3000}/api/Read/`, { params: formData })

      // const data = response.json();
      .then((response) => {
        // console.log("this is", response, "data");

        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // console.log("formData:", formData);
    // console.log("dATA*:",Data,"***");
    navigate("/Product");
  };

  return (
    <>
      <div className="search">
        <h3>List_Object</h3>
        <form onSubmit={handleSubmit} className="form">
          BUCKET NAME:
          <select name="bucketName" value={formData.bucketName} onChange={handleChange}>
            <option value="">select</option>,
            {buckets.map((B) => (
              <option value={B.Name} key={B.CreationDate}>
                {B.Name}
              </option>
            ))}
          </select>
          <select
            name="objectKey"
            value={formData.objectKey}
            onChange={handleChange}
          >
            <option value="">select</option>,
            {Object.map((obj, index) => (
              <option value={obj} key={index}>
                {obj}
              </option>
            ))}
          </select>
          <button type="submit">list object1</button>
        </form>
        <h4>OBJECT DATA</h4>
        <p> {Data.projectName} </p>
        <p> {Data.discription} </p>
        <p> {Data.image} </p>
      </div>
    </>
  );
};

export default List_Object;
