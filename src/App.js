import { faLocationArrow, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route} from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import Main from './Components/MainComponent/MainComponent';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';
import './App.css';

function App() {

  const [forecast, setForecast] = useState();
  const [weather, setWeather] = useState();
  library.add( faLocationArrow, faMapMarkedAlt );

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

  const reload = () => window.location.reload;

  return (
    <Fragment>
      {forecast !== undefined ? (
        <Switch>
          <Route path="/">
            <Main weatherInfo={weather} forecastInfo={forecast.list} />
          </Route>
          <Route path="/.well-known/pki-validation/C00708A6A0C829CBBAFF63D1E8AB82D2.txt" onEnter={reload} />
        </Switch>
      ) : (
        <p>loading...</p>
      )}
    </Fragment>
  );
}


export default App;
