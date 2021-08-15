import React from "react";
import WeekWeatherCard from "../week-weather-card";
import "./style.css";
import { currentDay } from "../../aux-functions";

function WeekWeather(props) {

  const imgURL = "https://image.flaticon.com/icons/png/512/106/106059.png";
  return (
    <div className="week-main-container">
      {props.weekForecast.map((v) => (
            <WeekWeatherCard
              weekDay={currentDay(v.dt)}
              highestTemp={v.temp.max.toFixed(1)}
              lowestTemp={v.temp.min.toFixed(1)}
              imgURL={imgURL}
            ></WeekWeatherCard>
          ))}
    </div>
  );
}

export default WeekWeather;
