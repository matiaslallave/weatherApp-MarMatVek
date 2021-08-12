import React from 'react';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import './style-search.css';


function SearchContainer(){

return(
     <React.Fragment>
         <div className="main-container-c1">
         <div className="search-container">
         <input className="input" type="text" placeholder= "&#x1F50E;&#xFE0E; Search for places..."/>
         <LocationSearchingIcon className="icon-location"></LocationSearchingIcon>
         </div>
         <img className="img-weather" src="https://www.kindpng.com/picc/m/553-5539135_cartoon-mostly-cloudy-weather-hd-png-download.png" alt="foto"/>
         <h2 className="current__weather">12ºc</h2>
         <h5><strong>Monday</strong>, 16:00</h5>
         <div className="parrafos-weather">
         <p>Mostly Cloudy</p>
         <p>Rain, 30%</p>
         </div>
         </div>
     </React.Fragment>
);
}


export default SearchContainer;