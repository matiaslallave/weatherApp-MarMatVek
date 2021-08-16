import React from "react";
import WeekWeatherCard from "../week-weather-card";
import "./style.css";
import { currentDayShort } from "../../aux-functions";

function WeekWeather(props) {
  return (
    <div className="week-main-container">
      {props.weekForecast.map((v) => (
            <WeekWeatherCard
              weekDay={currentDayShort(v.dt)}
              highestTemp={v.temp.max.toFixed(0)}
              lowestTemp={v.temp.min.toFixed(0)}
              formatDegr={props.formatDegr}
              imgURL={`https://openweathermap.org/img/wn/${v.weather[0].icon}@2x.png`}
            ></WeekWeatherCard>
          ))}
    </div>
  );
}

export default WeekWeather;
