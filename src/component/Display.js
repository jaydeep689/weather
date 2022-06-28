import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
export default function Display(props) {

  return (
   
    <div>
      <Paper
        className="container"
        elevation={10}
        sx={{ margin: "2rem", background: "transparent", padding: "0.8rem",borderRadius:"1rem",display:"flex" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8} md={8}>
            <div className="d1">
              <p>CURRENT WEATHER</p>
              {props.time}
            </div>
          </Grid>
          <Grid item xs={8} md={4}>
            <div className="d1">
              <p id="region">
                {props.name},{props.region}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="d1" id="d2">
              <img src={props.icon} alt={""} id="img"></img>
              <p id="temp">{props.temp}°C</p>
              <p id="feel">
                {props.text}
                <br></br>Feel Like<br></br> {props.feel}
              </p>
            </div>
          </Grid>
          <Grid item xs={8} md={2}>
            <div className="d1" >
              <p>Wind</p>
              {props.speed} km/h
            </div>
          </Grid>
          <Grid item xs={8} md={2}>
            <div className="d1">
              <p>Pressure</p>
              {props.pressure} mb
            </div>
          </Grid>
          <Grid item xs={8} md={2}>
            <div className="d1">
              <p>Humidity</p>
              {props.humidity} %
            </div>
          </Grid>
          <Grid item xs={8} md={2}>
            <div className="d1">
              <p>Visibility</p>
              {props.visable} Km
            </div>
          </Grid>
          <Grid item xs={8} md={2}>
            <div className="d1" >
              <p>UV</p>
              {props.uv} nm
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
