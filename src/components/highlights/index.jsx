import "./style.css";
import HighlightsCard from "./highlight-card";

function Highlights() {
  return (
    <div className="highlightsSection">
      <h3 className="highlightTitle">Today's Highlights</h3>
      <div className="highlightsContainer">
        <HighlightsCard cardName="uvIndex"></HighlightsCard>
        <HighlightsCard cardName="windStatus"></HighlightsCard>
        <HighlightsCard cardName="sunriseSunset"></HighlightsCard>
        <HighlightsCard cardName="humidity"></HighlightsCard>
        <HighlightsCard cardName="visibility"></HighlightsCard>
      </div>
    </div>
  );
}

export default Highlights;
