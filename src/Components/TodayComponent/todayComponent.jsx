import React, { useState } from 'react'
import { Container, DayLocation, Icon, Temp, Weather } from './todayStyles'

function Today({ weatherInfo }) {

  const [temp, setTemp] = useState('C');
  let date = new Date();
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const tempHandler = () =>{

    switch(temp){
      case 'C':
        return `${Math.round((weatherInfo.main.temp - 273.15 ))}`;

      case 'F':
        return `${Math.round((weatherInfo.main.temp - 273.15) * (9/5) + 35)}`;

      default:
        return `${Math.round((weatherInfo.main.temp - 273.15 ))}`;
    }
  }

  return (
    <Container>
      <Icon
        src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`}
        alt={weatherInfo.weather[0].description}
      />
      <Temp>
        <p className="temp">{tempHandler()}</p>
        <p className="temp_deg">{`°${temp}`}</p>
      </Temp>

      <Weather>
        <p className="weather"> {weatherInfo.weather[0].main} </p>
      </Weather>

      <DayLocation>
        <p className="info" >
          {`Today . ${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}`}
        </p>
        <p className="info" >
          {` ${weatherInfo.name}, ${weatherInfo.sys.country} `}
        </p>
      </DayLocation>
    </Container>
  );
}

export default Today
