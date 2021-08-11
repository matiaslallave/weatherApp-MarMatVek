import SearchContainer from './components/search-container';
import './App.css';
import Highlights from './components/highlights';


function App() {
  return (
  <div className="main-containerApp">

      <div className="left-container">
       <SearchContainer></SearchContainer>
      </div>

      <div className="right-container">
      <div className="header-containerApp">
         <h2 className="title-weather">Weather</h2>
         <div className="button-container">
         <button className="button button-c">ºC</button>
         <button className="button button-f">ºF</button>
         </div>
      </div>  
      <div className="week-container">
        {/* Aquí va el componente de marta */}
        <p>Esto lo puse para probar los espacios, aquí irian las cards de marta.
        </p>
       </div>
       <div className="highlights">
        {/* Aqui va el componente de matias */}
        <p>Esto lo puse para probar los espacios,aquí irian las cards de matias.</p>
       </div>   
      </div>
      </div>

  );
}

export default App;
