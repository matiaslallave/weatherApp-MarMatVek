import React from 'react';
import './style-search.css';


function SearchContainer(){

return(
     <React.Fragment>
         <div className="main-container-c1">
         <div className="search-container">
         <input placeholder="Search for places"></input>
         </div>
         <img className="img-weather" src="https://www.kindpng.com/picc/m/553-5539135_cartoon-mostly-cloudy-weather-hd-png-download.png" alt="foto"/>
         <h2>12Cº</h2>
         <h5>Monday, 16:00</h5>
         <p>Mostly Cloudy</p>
         <p>Rain, 30%</p>
         </div>
     </React.Fragment>
);
}


export default SearchContainer;