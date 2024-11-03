import * as React from "react";
import "../css/imageList.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function TitlebarBelowImageList() {
  const [bucket, setbuckets] = useState("aaliya-1721126150278");
  const [Objects, setObjects] = useState([]);
  const navigate = useNavigate();
  const [author, setauthor] = useState("ASIFIQBAL");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ListObject/", {
        params: { bucketName: bucket },
      })
      .then((response) => {
        console.log(response.data); // Debugging purpose
        setObjects(response.data);
        // console.log("bucket list:", response.data);
      })
      .catch((error) => {
        console.log("thar was an error fetching the data", error, "os");
      });
  }, []);
  return (
    <>
      <div id="ImageList">
        <h3>My 3D ImageList</h3>
        <ImageList id="Image">
          {Objects.map((Object) => (
            <ImageListItem key={Object.imageUrl} id="ImageListbar">
              <img
                srcSet={`${Object.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${Object.imageUrl}?w=248&fit=crop&auto=format`}
                alt={"image"}
                loading="lazy"
              />
              <ImageListItemBar
                title={Object.projectName}
                subtitle={<span>by: {author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <h3>ImageList</h3>
      </div>
    </>
  );
}
