import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className="left-container">
      {/* Aquí va el componente de veka que tiene el search*/}
      </div>
    <div className="right-container">
      <div className="header-container">
         <h2 className="title-weather">Weather</h2>
         <div className="button-container">
         <button className="button button-c">ºC</button>
         <button className="button button-f">ºF</button>
         </div>
      </div>
      <div className="week-container">
        {/* Aquí va el componente de marta */}
       </div>
       <div className="highlights">
        {/* Aqui va el componente de matias */}
       </div>   
      </div>
      </div>
  );
}

export default App;
