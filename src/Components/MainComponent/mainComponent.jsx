import Today from '../TodayComponent/TodayComponent';
import React, { useEffect, useState } from "react";
import { Container } from './mainStyles';
import axios from "axios";

function Main() {

  const [location, setLocation] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=6&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          console.log(response.data)
            setLocation(response.data);
          })
          .catch((err) => err);
      });
    }
  }, []);

  return (
    <Container>
      { location !== undefined ? 
        <Today 
          weatherTemp={ location.list[0].main } 
          weatherInfo={ location.list[0].weather[0] } 
          location={ location.city }/> : <p>loading...</p> }
      
    </Container>
  );
}

export default Main
