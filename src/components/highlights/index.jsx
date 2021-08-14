import "./style.css";
import HighlightsCard from "../highlight-card";

function Highlights(props) {
  return (
    <div className="highlightsSection">
      <div className="highlightsContainer">
        <HighlightsCard cardName="uvIndex" highlightData={props.UVIndex}></HighlightsCard>
        <HighlightsCard cardName="windStatus" highlightData= {props.windStatus}></HighlightsCard>
        <HighlightsCard cardName="sunriseSunset" sunrise={props.sunrise} sunset={props.sunset}></HighlightsCard>
        <HighlightsCard cardName="humidity" highlightData= {props.humidity} highlightDetails={props.humDetails}></HighlightsCard>
        <HighlightsCard cardName="visibility" highlightData= {props.visibility} highlightDetails={props.visDetails}></HighlightsCard>
      </div>
    </div>
  );
}

export default Highlights;
