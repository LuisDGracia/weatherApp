import React, { useState } from 'react'
import { Container, Icon } from './todayStyles'

function Today({ weatherInfo }) {

  const [temp, setTemp] = useState('C');
  let date = new Date();
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const tempHandler = () =>{

    switch(temp){
      case 'C':
        return `${Math.round((weatherInfo.main.temp - 273.15 ))}°${temp}`;

      case 'F':
        return `${Math.round((weatherInfo.main.temp - 273.15) * (9/5) + 35)}°${temp}`;

      default:
        return `${Math.round((weatherInfo.main.temp - 273.15 ))}°${temp}`;
    }
  }

  return (
    <Container>
      <Icon
        src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`}
        alt={weatherInfo.weather[0].description}/>
        <p>{tempHandler()}</p>
        <p> {weatherInfo.weather[0].main} </p>
        <p>{day[date.getDay()]}</p>
        <p>{date.getDate()}</p>
        <p>{month[date.getMonth()]}</p>
        <p>{weatherInfo.name}</p>
        <p> {weatherInfo.sys.country} </p>
    </Container>
  );
}

export default Today
