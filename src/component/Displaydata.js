import React from "react";
import Paper from "@mui/material/Paper";

export default function Displaydata(props) {
  return (
    <>
      <Paper
        className="container"
        elevation={24}
        sx={{ backgroundColor: "transparent" }}
      >
        <div className="grid-item" id="item1">
          <p>CURRENT WEATHER</p>
          {props.time}
        </div>
        <div className="grid-item" id="item2">
          <img src={props.icon} alt={""} id="img"></img>
        </div>
        <div className="grid-item" id="item3">
          <p>{props.temp}°C</p>
        </div>
        <div className="grid-item" id="item4">
          <p>{props.text}</p>
          <p id="feel">FEEL LIKE {props.feel}</p>
        </div>
        <div className="grid-item" id="item5">
          <p>Wind</p>
          {props.speed} km/h
        </div>
        <div className="grid-item">
          <p>Pressure</p>
          {props.pressure} mb
        </div>
        <div className="grid-item">
          <p>Humidity</p>
          {props.humidity} %
        </div>
        <div className="grid-item">
          <p>Visibility</p>
          {props.visable} Km
        </div>
        <div className="grid-item">
          <p>UV</p>
          {props.uv} nm
        </div>
      </Paper>
    </>
  );
}
