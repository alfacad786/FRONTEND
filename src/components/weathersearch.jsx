import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Weather.css";

export default function WeatherSearch({update}) {
  let [city, setcity] = useState("");
  
  const weatherapikey = import.meta.env.VITE_REACT_APP_API_KEY;
  const weatherapiurl = import.meta.env.VITE_REACT_APP_API_URL;


  let WeatherData = async () => {
    
    let data =  await fetch (`${weatherapiurl}?q=${city}&appid=${weatherapikey}&units=metric `)
    let jsondata = await data.json() ;
    try {     
     
      console.log(jsondata);
      console.log(jsondata.main);
      console.log(jsondata.name);
      console.log(jsondata.wind);
   
       let result = {
         city: jsondata.name,     
         lat: jsondata.coord.lat,
         lon: jsondata.coord.lon,
         feels_like: jsondata.main.feels_like,
         grnd_level: jsondata.main.grnd_level,
         sea_level: jsondata.main.sea_level,
         pressure: jsondata.main.pressure,
         humidity: jsondata.main.humidity,
         temp_max: jsondata.main.temp_max,
         temp_min: jsondata.main.temp_min,
         temp: jsondata.main.temp,
         Speed: jsondata.wind.speed,
         Deg: jsondata.wind.deg,
         Gust: jsondata.wind.gust
       };
           return result;
    
   } catch (error) {console.log(jsondata.message);
    let err=jsondata.message
    return err; 
    
   }

  
  };

  let HandelChange = (evt) => {
    setcity(evt.target.value);
  };

  let handsubmit = async (evt) => {
    evt.preventDefault();
    setcity ("");   
   let newinfo= await WeatherData();
   update(newinfo);
  };

  return (
    <div className="Card1" id="card-1-2-3">
     
      <form onSubmit={HandelChange}>
        <TextField
        className="TextField"
          id="searchCity"
          label="city name"
          variant="outlined"
          value={city}
          required
          onChange={HandelChange}
        />
        <Button variant="contained" onClick={handsubmit} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
