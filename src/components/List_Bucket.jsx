import React, { useState, useEffect } from "react";
import "./component.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const List_Bucket = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ListObject/")
      .then((response) => {
        setProducts(response.data);
        console.log("this:", response.data, "from card");
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error);
      });
  }, []);
  console.log("ye", products, "hai");
  const Items = (
    <>
    <p>bucket name:</p>
    <select name="search" className="select">
      <option value="select">select</option>
      
      {products.map((p) => <option   key:_id="true"> {p.Name} </option>)}


        {/* {Buckets.map((b) => ` • ${b.Name}`).join("\n")} */}
     
    </select>
    </>
  );

  return Items;

};

export default List_Bucket;
