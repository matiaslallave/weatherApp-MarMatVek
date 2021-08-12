import React from "react";
import "./style.css";

function HighlightsCard(props) {
  let title = "";
  let setClass = "";
  let data = "DATA";
  let details = "details";
  let cardDataClass = "cardData";

  switch (props.cardName) {
    case "uvIndex":
      title = "UV Index";
      setClass = "uvIndexCard";
      cardDataClass = "cardDataUVIndex";
      break;
    case "windStatus":
      title = "Wind Status";
      setClass = "windStatusCard";
      break;
    case "sunriseSunset":
      title = "Sunrise & Sunset";
      setClass = "sunriseSunsetCard";
      break;
    case "humidity":
      title = "Humidity";
      setClass = "humidityCard";
      break;
    case "visibility":
      title = "Visibility";
      setClass = "visibilityCard";
      break;
    default:
      break;
  }

  return (
    <React.Fragment>
      {props.cardName === "sunriseSunset" ? (
        <div className={`highlightCard ${setClass}`}>
          <div className="cardTitle">{title}</div>
          <div className="cardDataSunriseSunset">
            <div className="marginBottom">6:35 AM</div>
            <div>5:42 PM</div>
          </div>
          <div className="details">{details}</div>
        </div>
      ) : (
        <div className={`highlightCard ${setClass}`}>
          <div className="cardTitle">{title}</div>
          <div className={cardDataClass}>{data}</div>
          <div className="details">{details}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default HighlightsCard;
