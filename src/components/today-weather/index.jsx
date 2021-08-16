import React from "react";
import "./style.css"

function TodayWeather(props) {

  return (
    <React.Fragment>
      <h3>{props.cityName}</h3>
      <img className="img-weather" src={props.currentImgURL} alt="foto" />
      <h2 className="current__weather">{(Math.abs(props.currentTemp) - Math.floor(Math.abs(props.currentTemp))) === '0' ? parseInt(props.currentTemp).toFixed(0) : props.currentTemp}</h2>
      <h5 className='current__day_location'>
        <strong>{props.currentDay}</strong>, <span className="time-color">{props.currentTime}</span>
      </h5>
      <hr></hr>
      <div className="parrafos-weather">
        <div className='f-p'>
        {/* <img className='cloudy-img' src={'http://openweathermap.org/img/wn/03d@2x.png'} alt='cloud'/> */}
        <p>🌥 {props.currentDescription}</p>
        </div>
        <div className='s-p'>
        {/* <img className='rain-img' src={'http://openweathermap.org/img/wn/10d@2x.png'} alt='cloud'/> */}
        <p>⛈ Rain - {props.currentRainProb}%</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TodayWeather;
