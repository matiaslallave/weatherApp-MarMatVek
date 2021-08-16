import "./style.css";

function WeekWeatherCard(props) {
  return (
    <div className="main-container-week">
      <h4 className="name-day">{props.weekDay}</h4>
      <img
        className="img-current-weather-day"
        src={props.imgURL}
        alt="img-weather"
      />
      <p className="high-temp">
        {props.highestTemp}{props.formatDegr} <span className="low-temp">/ {props.lowestTemp}{props.formatDegr}</span>
      </p>
    </div>
  );
}

export default WeekWeatherCard;
