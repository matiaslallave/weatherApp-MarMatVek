import "./style.css";

function WeekItem(props) {
  return (
    <div className="main-container-week">
      <h4 className="name-day">{props.nameDay}</h4>
      <img
        className="img-current-weather-day"
        src={props.imgURL}
        alt="img-weather"
      />
      <p className="temperature-day">
        {props.highestTemp} <span>{props.lowestTemp}</span>
      </p>
    </div>
  );
}

export default WeekItem;
