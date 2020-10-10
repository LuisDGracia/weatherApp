import React from 'react'
import { Day, ForecastContainer } from './ForecastStyles'

function Forecast({ forecast, temp }) {

  let date;
  let lastDate;
  let today = new Date();
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const tempHandler = ( value ) => {
    if (temp) {
      return `${Math.round(value - 273.15)}`;
    } else {
      return `${Math.round((value - 273.15) * (9 / 5) + 35)}`;
    }
  };

  const tempNotation = () => {
    if (temp) {
      return "C";
    } else {
      return "F";
    }
  };

  return (
    <ForecastContainer>
      {forecast.map((weather) => {
        date = new Date(weather.dt_txt);
        //Si el dia del evaluado es diferente al dia previo
        if( date.getDay() !== lastDate ){
          //Si el dia evaluado es diferente al dia de hoy
          if (date.getDay() !== today.getDay()) {
            lastDate = date.getDay();
            return (
              <Day key={weather.dt} >
                <p className="day" >{`${ day[date.getDay()] }, ${ date.getDate() } ${ month[date.getMonth()] }`}</p>
                <img className="day_img" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon"/>
                <p className="tempMax"> {`${tempHandler(weather.main.temp_min)}°${tempNotation()}`} </p>
                <p className="tempMin"> {`${tempHandler(weather.main.temp_max)}°${tempNotation()}`} </p>
              </Day>
            )
          }
        }
        return true
      })}
    </ForecastContainer>
  );
}

export default Forecast
