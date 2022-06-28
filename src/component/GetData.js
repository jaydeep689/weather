import React, { useEffect, useState } from "react";
import Display from "./Display";

export default function GetData(props) {
  const [ctemp, setCtemp] = useState("");
  const [feellike, setFeellike] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [pressure, setPressure] = useState("");
  const [text, setText] = useState("");
  const [humidity, setHumidity] = useState("");
  const [Visable, setVisable] = useState("");
  const [Uv, setUv] = useState("");
  const [icon, setIcon] = useState("");
  const [time, settime] = useState("");
  const [name,setName] =useState("");
  const[region,setRegion]=useState("");

  useEffect(() => {
    let url = `http://api.weatherapi.com/v1/current.json?key=ca86c342883a463296d50936222706&q=${props.loc}&aqi=no`;
    const fetchData = async () => {
      let data = await fetch(url);
      let parsdata = await data.json();
      setCtemp(parsdata.current.temp_c);
      setFeellike(parsdata.current.feelslike_c);
      setWindspeed(parsdata.current.wind_kph);
      setPressure(parsdata.current.pressure_mb);
      setText(parsdata.current.condition.text);
      setHumidity(parsdata.current.humidity);
      setVisable(parsdata.current.vis_km);
      setUv(parsdata.current.uv);
      setIcon(parsdata.current.condition.icon);
      settime(parsdata.location.localtime);
      setName(parsdata.location.name);
      setRegion(parsdata.location.region);
      console.log(parsdata);
    };
    fetchData();
  }, [(props.loc)]);

  return (
    <div>
      <Display
        temp={ctemp}
        feel={feellike}
        speed={windspeed}
        pressure={pressure}
        text={text}
        humidity={humidity}
        icon={icon}
        visable={Visable}
        uv={Uv}
        time={time}
        name={name}
        region={region}
      ></Display>
    </div>
  );
}
