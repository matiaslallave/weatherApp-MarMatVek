import HighlightsCard from './highlight-card'
import './style.css'




function Highlights () {
    return(
        <div>
            <h3>Today's Highlights</h3>
            <div>
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