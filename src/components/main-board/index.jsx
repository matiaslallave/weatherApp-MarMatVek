import WeekWeather from "../week-weather";
import "./style.css";
import Highlights from "../highlights";
import TodayWeather from "../today-weather";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { useState } from "react";
import { useEffect } from "react";
import { APIKey } from "../../APIKey";

function MainBoard() {
  const imgURL = "https://image.flaticon.com/icons/png/512/106/106059.png";
  const currentImgURL =
    "https://www.kindpng.com/picc/m/553-5539135_cartoon-mostly-cloudy-weather-hd-png-download.png";

  const [coord, setCoord] = useState({});
  const [currentLocation, setCurrentLocation] = useState({
    current: {
      dt: 0,
      temp: 0,
      sunrise: 0,
      sunset: 0,
      humidity: 0,
      uvi: 0,
      wind_speed: 0,
      visibility: 0,
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
    },
    hourly: [
      {
        pop: 0,
      },
    ],
  });
  const [measurement, setMeasurement] = useState("metric");
  const [formatDegr, setFormatDegr] = useState(" º");

  const getLocationByCoords = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${measurement}&exclude=alerts,minutely&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentLocation(data);
      });
  };

  useEffect(() => {
    let auxLat;
    let auxLon;
    navigator.geolocation.getCurrentPosition((pos) => {
      auxLat = pos.coords.latitude;
      auxLon = pos.coords.longitude;
      getLocationByCoords(auxLat, auxLon);
    });
  }, []);

  // useEffect(() => {

  // }, [coord.latitude, coord.longitude, measurement]);

  const realTimeClock = (dt) => {
    let date = new Date(dt * 1000);

    let hours = date.getHours();

    let minutes = "0" + date.getMinutes();

    let formattedTime = hours + ":" + minutes.slice(-2);

    return formattedTime;
  };

  const currentDay = () => {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
      new Date(currentLocation.current.dt * 1000)
    );
  };

  return (
    <div className="main-containerApp">
      <div className="left-container">
        <div className="main-container-c1">
          <div className="search-container">
            <input
              className="input"
              type="text"
              placeholder="&#x1F50E;&#xFE0E; Search for places..."
            />
            <LocationSearchingIcon className="icon-location"></LocationSearchingIcon>
          </div>
        </div>
        <TodayWeather
          currentImgURL={currentImgURL}
          currentTemp={`${currentLocation.current.temp.toFixed(
            1
          )}${formatDegr}`}
          currentDay={currentDay()}
          currentTime={realTimeClock(currentLocation.current.dt)}
          currentDescription={
            currentLocation.current.weather[0].description
              .charAt(0)
              .toUpperCase() +
            currentLocation.current.weather[0].description.slice(1)
          }
          currentRainProb={currentLocation.hourly[0].pop}
        ></TodayWeather>
      </div>

      <div className="right-container">
        <div className="header-containerApp">
          <h2 className="title-weather">Week</h2>
          <div className="button-container">
            <button className="button button-c">ºC</button>
            <button className="button button-f">ºF</button>
          </div>
        </div>
        <div className="week-container">
          <WeekWeather
            highestTemp="31º"
            lowestTemp="-4º"
            imgURL={imgURL}
          ></WeekWeather>
        </div>
        <div className="highlights">
          <h2>Today's Highlights</h2>
          <Highlights
            UVIndex={currentLocation.current.uvi}
            windStatus={`${(currentLocation.current.wind_speed / 3.6).toFixed(
              2
            )} km/h`}
            sunrise={realTimeClock(currentLocation.current.sunrise)}
            sunset={realTimeClock(currentLocation.current.sunset)}
            humidity={`${currentLocation.current.humidity} %`}
            visibility={`${currentLocation.current.visibility / 1000} km`}
            humDetails="Normal"
            visDetails="Average"
          ></Highlights>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
