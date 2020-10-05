import React, { useState } from 'react'
import { Container, Icon } from './todayStyles'

function Today({ weatherTemp, weatherInfo, location }) {

  const [temp, setTemp] = useState('F');
  let date = new Date();
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const tempHandler = () =>{
    let temperature = ""

    switch(temp){
      case 'C':
        return temperature = `${Math.round((weatherTemp.temp - 273.15 ))}°${temp}`;

      case 'F':
        return temperature = `${Math.round((weatherTemp.temp - 273.15) * (9/5) + 35)}°${temp}`;

      default:
        return temperature = `${Math.round((weatherTemp.temp - 273.15 ))}°${temp}`;
    }
  }

  return (
    <Container>
      <Icon src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`} alt={weatherInfo.description}></Icon>
      <p>{ tempHandler() }</p>
      <p> {weatherInfo.main} </p>
      <p>{ day[ date.getDay() ] }</p>
      <p>{ date.getDate() }</p>
      <p>{ month[ date.getMonth() ] }</p>
      <p>{ location.name }</p>
      <p> {  location.country } </p>
    </Container>
  )
}

export default Today
