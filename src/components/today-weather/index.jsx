import React from "react";
import "./style.css"

function TodayWeather(props) {
  return (
    <React.Fragment>
      <img className="img-weather" src={props.currentImgURL} alt="foto" />
      <h2 className="current__weather">{props.currentTemp}</h2>
      <h5>
        <strong>{props.currentDay}</strong>, {props.currentTime}
      </h5>
      <div className="parrafos-weather">
        <p>{props.currentDescription}</p>
        <p>Rain - {props.currentRainProb}%</p>
      </div>
    </React.Fragment>
  );
}

export default TodayWeather;
