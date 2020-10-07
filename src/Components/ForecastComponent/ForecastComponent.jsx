import React from 'react'
import { Day, ForecastContainer } from './predictionStyles'

function Forecast({ forecast }) {

  let date
  let today = new Date()
  let lastDate;
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

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
                <p>{`${ day[date.getDay()] }, ${ date.getDate() } ${ month[date.getMonth()] }`}</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon"/>
                <p> {`${weather.main.temp_min} ${weather.main.temp_max}`} </p>
              </Day>
            )
          }
        }
      })}
    </ForecastContainer>
  );
}

export default Forecast
