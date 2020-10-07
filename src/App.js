import React, { Fragment, useEffect, useState } from 'react';
import Main from './Components/MainComponent/MainComponent';
import axios from 'axios';
import './App.css';

function App() {

  const [forecast, setForecast] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setForecast(response.data);
          })
          .catch((err) => err);

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            setWeather(response.data);
          })
          .catch((err) => err);
      });
    }
  }, []);

  console.log(weather)

  return (
    <Fragment>
      { forecast !== undefined ? 
        <Main
          weatherInfo={weather}
          forecastInfo={forecast.list}/>
      :  <p>loading...</p> }
    </Fragment>
  );
}

export default App;
