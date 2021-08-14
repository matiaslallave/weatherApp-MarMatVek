import React from "react";
import WeekWeatherCard from "../week-weather-card";
import "./style.css";

function WeekWeather(props) {
  return (
    <div className="week-main-container">
      <WeekWeatherCard
        nameDay="Sun"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Mon"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Tue"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Wed"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Thu"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Fri"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
      <WeekWeatherCard
        nameDay="Sat"
        highestTemp={props.highestTemp}
        lowestTemp={props.lowestTemp}
        imgURL={props.imgURL}
      ></WeekWeatherCard>
    </div>
  );
}

export default WeekWeather;
