import { Container, DayLocation, Icon, Temp, Weather } from './todayStyles';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Today({ weatherInfo, temp }) {

  let date = new Date();
  let day = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
  let month = [ 'Jan', 'Feb', 'Mar', 'Apr' , 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  const tempHandler = () =>{
    if( temp ){
      return `${Math.round(weatherInfo.main.temp - 273.15)}`;
    }else{
      return `${Math.round((weatherInfo.main.temp - 273.15) * (9 / 5) + 35)}`;
    }
  }

  const tempNotation = () => {
    if( temp ){
      return 'C'
    }else{
      return 'F'
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
        <p className="temp_deg">{`°${tempNotation()}`}</p>
      </Temp>

      <Weather>
        <p> {weatherInfo.weather[0].main} </p>
      </Weather>

      <DayLocation>
        <p className="info" >
          {`Today . ${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}`}
        </p>
        <FontAwesomeIcon className="location" icon={faMapMarkerAlt} />
        <p className="location" >
          {` ${weatherInfo.name}, ${weatherInfo.sys.country} `}
        </p>
      </DayLocation>
    </Container>
  );
}

export default Today
