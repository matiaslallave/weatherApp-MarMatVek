import "./style.css";
import HighlightsCard from "../highlight-card";

function Highlights(props) {

  // let humDetails = '';

  // if (props.InfoWheater.humidity <= 25) props.humDetails = 'Normal 🤙🏻';
  // if (props.InfoWheater.humidity > 25 && props.InfoWheater.humidity  <= 50) humDetails = 'Average 👍🏼';
  // if (props.InfoWheater.humidity > 50 && props.InfoWheater.humidity <= 75) humDetails = 'High 💦';
  // if (props.InfoWheater.humidity  > 75 && props.InfoWheater.humidity  <= 100) humDetails= 'Extreme 🥵';

  // console.log(humDetails);

  // let visiDetails = '';

  // if (props.InfoWheater.visibility <= 5000) visiDetails = 'Restricted 😑';
  // if (props.InfoWheater.visibility > 5000 && props.InfoWheater.visibility <= 10000) visiDetails = 'Medium 🧐';
  // if (props.InfoWheater.visibility > 10000 && props.InfoWheater.visibility <= 15000) visiDetails = 'Good 👀';
  // if (props.InfoWheater.visibility > 15000) visiDetails = 'Perfect ⭐️';

  // console.log(visiDetails);
  // }

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
