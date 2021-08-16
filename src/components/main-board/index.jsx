import WeekWeather from "../week-weather";
import "./style.css";
import Highlights from "../highlights";
import TodayWeather from "../today-weather";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { useState } from "react";
import { useEffect } from "react";
import { APIKey } from "../../APIKey";
import { currentDayLong } from "../../aux-functions";
import { useRef } from "react";

function MainBoard() {
  const [lonState, setLonState] = useState();
  const [latState, setLatState] = useState();
  const [cityName, setCityName] = useState("Loading...");
  const [weekForecast, setWeekForecast] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    timezone_offset: 0,
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
  const [formatDegr, setFormatDegr] = useState("°C");
  const [windSpeed, setWindSpeed] = useState(0);
  const [faren, setFaren] = useState(false);



  const searchRef = useRef();

  const getLocationByCoords = (lon, lat, measurement, faren) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${measurement}&exclude=alerts,minutely&appid=${APIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (faren) {
          setCurrentLocation(data);
          data.daily.pop();
          setWeekForecast(data.daily);
          setWindSpeed(fromMilesPerHourtoKMH(data.current.wind_speed));
        } else {
          setCurrentLocation(data);
          data.daily.pop();
          setWeekForecast(data.daily);
          setWindSpeed(fromMetresPerSectoKMH(data.current.wind_speed));
        }
      });
  };

  const getGeolocation = () => {
    let auxLat;
    let auxLon;
    navigator.geolocation.getCurrentPosition((pos) => {
      auxLat = pos.coords.latitude;
      auxLon = pos.coords.longitude;
      getLocationByCoords(auxLon, auxLat, measurement, faren);
      setCityName("Your location");
      setLonState(auxLon);
      setLatState(auxLat);
    });
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  const fromMilesPerHourtoKMH = (speed) => {
    return speed * 1.609;
  };

  const fromMetresPerSectoKMH = (speed) => {
    return speed * 3.6;
  };

  const realTimeClock = (dt, tz) => {
    let date = new Date((dt + tz) * 1000 - 7200000);

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
        getLocationByCoords(auxLon, auxLat, measurement, faren);
        setLonState(auxLon);
        setLatState(auxLat);
      });
    searchRef.current.value = "";
  };

  const handleClickFarenheit = () => {
    const auxFaren = true;
    setFaren(true);
    const auxMeasurement = "imperial";
    setMeasurement(auxMeasurement);
    setFormatDegr("°F");
    getLocationByCoords(lonState, latState, auxMeasurement, auxFaren);
  };

  const handleClickCelsius = () => {
    const auxFaren = false;
    setFaren(false);
    const auxMeasurement = "metric";
    setMeasurement(auxMeasurement);
    setFormatDegr("°C");
    getLocationByCoords(lonState, latState, auxMeasurement, auxFaren);
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
              <LocationSearchingIcon fontSize='small' className="icon-location"></LocationSearchingIcon>
            </button>
          </div>
        </div>
        <TodayWeather
          cityName={cityName}
          currentImgURL={`https://openweathermap.org/img/wn/${currentLocation.current.weather[0].icon}@4x.png`}
          currentTemp={`${currentLocation.current.temp.toFixed(
            0
          )}${formatDegr}`}
          currentDay={currentDayLong(
            currentLocation.current.dt,
            currentLocation.timezone_offset
          )}
          currentTime={realTimeClock(
            currentLocation.current.dt,
            currentLocation.timezone_offset
          )}
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
          <h2 className="title-weather">
            <strong>Week</strong>
          </h2>
          <div className="button-container">
          <button className="button-C-F selected no-selected target focus"  onClick={handleClickCelsius} >
              °C
            </button>
            <button className="button-C-F selected  no-selected target focus" onClick={handleClickFarenheit}>
              °F
            </button>
          </div>
        </div>
        <div className="week-container">
          <WeekWeather
            weekForecast={weekForecast}
            formatDegr={formatDegr}
            weekTimezone={currentLocation.timezone_offset}
          ></WeekWeather>
        </div>
        <div className="highlights">
          <h2 className="title-highligth">Today's Highlights</h2>
          <Highlights
            UVIndex={currentLocation.current.uvi}
            windStatus={`${windSpeed.toFixed(1)} km/h`}
            sunrise={realTimeClock(
              currentLocation.current.sunrise,
              currentLocation.timezone_offset
            )}
            sunset={realTimeClock(
              currentLocation.current.sunset,
              currentLocation.timezone_offset
            )}
            humidity={currentLocation.current.humidity}
            visibility={currentLocation.current.visibility}
          ></Highlights>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
