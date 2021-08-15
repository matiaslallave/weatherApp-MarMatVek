import WeekWeather from "../week-weather";
import "./style.css";
import Highlights from "../highlights";
import TodayWeather from "../today-weather";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { useState } from "react";
import { useEffect } from "react";
import { APIKey } from "../../APIKey";
import { currentDay } from "../../aux-functions";
import { useRef } from "react";

function MainBoard() {
  const currentImgURL =
    "https://www.kindpng.com/picc/m/553-5539135_cartoon-mostly-cloudy-weather-hd-png-download.png";

  const [cityName, setCityName] = useState("Loading...");
  const [coord, setCoord] = useState();
  const [weekForecast, setWeekForecast] = useState([]);
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

  const searchRef = useRef();

  const getLocationByCoords = (lon, lat) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${measurement}&exclude=alerts,minutely&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentLocation(data);
        data.daily.pop();
        setWeekForecast(data.daily);
      });
  };

  const getGeolocation = () => {
    let auxLat;
    let auxLon;
    navigator.geolocation.getCurrentPosition((pos) => {
      auxLat = pos.coords.latitude;
      auxLon = pos.coords.longitude;
      getLocationByCoords(auxLon, auxLat);
      setCityName('Your location');
    });
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  // useEffect(() => {
  //   getLocationByCoords(coord?.lon, coord?.lat);
  // }, [coord]);

  const realTimeClock = (dt) => {
    let date = new Date(dt * 1000);

    let hours = date.getHours();

    let minutes = "0" + date.getMinutes();

    let formattedTime = hours + ":" + minutes.slice(-2);

    return formattedTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = searchRef.current.value.toLowerCase().trim();
    setCityName(
      searchRef.current.value.charAt(0).toUpperCase() +
        searchRef.current.value.slice(1).trim()
    );
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        let auxLon = data.coord.lon;
        let auxLat = data.coord.lat;
        getLocationByCoords(auxLon, auxLat);
      });
    searchRef.current.value = "";
  };

  return (
    <div className="main-containerApp">
      <div className="left-container">
        <div className="main-container-c1">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input
                ref={searchRef}
                className="input"
                type="text"
                placeholder="&#x1F50E;&#xFE0E; Search for places..."
              />
              <input className="invisible" type="submit"></input>
            </form>
            <button className="no-button" onClick={getGeolocation}>
              <LocationSearchingIcon className="icon-location"></LocationSearchingIcon>
            </button>
          </div>
        </div>
        <TodayWeather
          cityName={cityName}
          currentImgURL={currentImgURL}
          currentTemp={`${currentLocation.current.temp.toFixed(
            1
          )}${formatDegr}`}
          currentDay={currentDay(currentLocation.current.dt)}
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
            <button className="button-C-F">ºC</button>
            <button className="button-C-F">ºF</button>
          </div>
        </div>
        <div className="week-container">
          <WeekWeather weekForecast={weekForecast}></WeekWeather>
        </div>
        <div className="highlights">
          <h2 className="title-highligth">Today's Highlights</h2>
          <Highlights
            UVIndex={currentLocation.current.uvi}
            windStatus={`${(currentLocation.current.wind_speed * 3.6).toFixed(
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
