import "./style.css";
import HighlightsCard from "../highlight-card";

function Highlights(props) {
  let humDetails = "";

  if (props.humidity <= 25) humDetails = "Normal 🤙🏻";
  if (props.humidity > 25 && props.humidity <= 50) humDetails = "Average 👍🏼";
  if (props.humidity > 50 && props.humidity <= 75) humDetails = "High 💦";
  if (props.humidity > 75 && props.humidity <= 100) humDetails = "Extreme 🥵";

  let visDetails = "";

  if (props.visibility <= 5000) visDetails = "Restricted 😠";
  if (props.visibility > 5000 && props.visibility <= 10000)
    visDetails = "Medium 🤔";
  if (props.visibility > 10000 && props.visibility <= 15000)
    visDetails = "Good 😎";
  if (props.visibility > 15000) visDetails = "Perfect ⭐️";

  return (
    <div className="highlightsSection">
      <div className="highlightsContainer">
        <HighlightsCard
          cardName="uvIndex"
          highlightData={props.UVIndex}
        ></HighlightsCard>
        <HighlightsCard
          cardName="windStatus"
          highlightData={props.windStatus}
        ></HighlightsCard>
        <HighlightsCard
          cardName="sunriseSunset"
          sunrise={props.sunrise}
          sunset={props.sunset}
        ></HighlightsCard>
        <HighlightsCard
          cardName="humidity"
          highlightData={`${props.humidity} %`}
          highlightDetails={humDetails}
        ></HighlightsCard>
        <HighlightsCard
          cardName="visibility"
          highlightData={`${props.visibility / 1000} km`}
          highlightDetails={visDetails}
        ></HighlightsCard>
      </div>
    </div>
  );
}

export default Highlights;
