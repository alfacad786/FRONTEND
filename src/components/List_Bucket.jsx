import React, { useState, useEffect } from "react";
import "../css/component.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
const HOST_3000 = import.meta.env.VITE_HOST_3000;
const List_Bucket = () => {
  const navigate = useNavigate();

  // ------------------s3 insert data in bucket-------------

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ListBuckets/"||`${HOST_3000}/api/ListBuckets/`)
      .then((response) => {
        setProducts(response.data);
        // console.log("this:", response.data, "from card");
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error);
      });
  }, []);
  // console.log("ye", products, "hai");
  const Items = (
    <div className="search">
      <div >
       BUCKET NAME:
        <select name="search">
          <option value="select">select</option>

          {products.map((p) => (
            <option key={p.CreationDate}> {p.Name}  </option>
          ))}

          {/* {Buckets.map((b) => ` • ${b.Name}`).join("\n")} */}
        </select>
      </div>
    </div>
  );

  return Items;
};

export default List_Bucket;
