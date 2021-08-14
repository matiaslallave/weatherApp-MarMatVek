import WeekWeather from "../week-weather";
import "./style.css";
import Highlights from "../highlights";
import TodayWeather from "../today-weather";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

function MainBoard() {
  const imgURL = "https://image.flaticon.com/icons/png/512/106/106059.png";
  const currentImgURL =
    "https://www.kindpng.com/picc/m/553-5539135_cartoon-mostly-cloudy-weather-hd-png-download.png";

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
          currentTemp="40º"
          currentDay="Sunday"
          currentTime="11:54 AM"
          currentDescription="Calorazo del copón"
          currentRainProb="50%"
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
            UVIndex="7"
            windStatus="7.70 km/h"
            sunrise="6:45 AM"
            sunset="8:58 PM"
            humidity="7%"
            visibility="7.2 km"
            humDetails="Normal"
            visDetails="Average"
          ></Highlights>
        </div>
      </div>
    </div>
  );
}

export default MainBoard;
