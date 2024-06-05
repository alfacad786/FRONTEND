import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Weather.css";

export default function WeatherData({ data }) {
  const hotimg = "./MAYURI1.jpg";
  const rainimg = "./SUNRISE1.jpg";
  const coldimg = "./SULEKH1.jpg";
  console.log("my", { data }, " is hear");

  const temp_max = data.temp_max * (9 / 5) + 32;
  const temp_min = data.temp_min * (9 / 5) + 32;
  const temp = data.temp * (9 / 5) + 32;
  return (
    <>
      <div className="Card2" id="card-1-2-3">
        card2
        <h5 className="cityname">City Name:{data.city}</h5>
        <div className="data">
          <table>
            <tbody>
              <tr>
                <th>
                  <p> city </p>
                </th>
                <td>
                  <p>{data.city}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> lat </p>
                </th>
                <td>
                  <p>{data.lat}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> lon </p>
                </th>
                <td>
                  <p>{data.lon}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> feels_like </p>
                </th>
                <td>
                  <p>{data.feels_like}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> grnd_level </p>
                </th>
                <td>
                  <p>{data.grnd_level}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> sea_level </p>
                </th>
                <td>
                  <p>{data.sea_level}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="map"></div>
          <img
            src={
              data.humidity > 80
                ? rainimg
                : data.temp_min > 15
                ? hotimg
                : data.temp_min > -35
                ? coldimg
                : ""
            }
            alt="image"
            style={{ maxHeight: "10" }}
          />
          <table>
            <tbody>
              <tr>
                <th>
                  <p> pressure </p>
                </th>
                <td>
                  <p>{data.pressure}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> humidity </p>
                </th>
                <td>
                  <p>{data.humidity}</p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> temp_max </p>
                </th>
                <td>
                  <p>
                    {temp_max}&deg;F, {data.temp_max}&deg;C{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> temp_min </p>
                </th>
                <td>
                  <p>
                    {temp_min}&deg;F, {data.temp_min}&deg;C
                  </p>
                </td>
              </tr>
              <tr>
                <th>
                  <p> temp </p>
                </th>
                <td>
                  <p>
                    {temp}&deg;F, {data.temp}&deg;C
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================Card3======================= */}

      <div className="Card3" id="card-1-2-3">
        <h3>description </h3>
        <p>Speed: {data.Speed}</p>
        <p>Deg: {data.Deg}</p>
        <p>Gust: {data.Gust}</p>
      </div>
    </>
  );
}
