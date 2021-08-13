import React from 'react';
import './days-style.css';

function CardWeek(){
return (
<React.Fragment>
<div className="week-main-container">
<div className="main-container-week">
<h4 className="name-day">Sun</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Mon</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Tue</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Wed</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Thu</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Fri</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
<div className="main-container-week">
<h4 className="name-day">Sat</h4>
<img className="img-current-weather-day" src="https://image.flaticon.com/icons/png/512/106/106059.png" alt='img-weather'/>
<p className="temperature-day">15º <span>-3º</span></p>
</div>
</div>
</React.Fragment>
);
}

export default CardWeek;