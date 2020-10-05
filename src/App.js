import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Main from './Components/MainComponent/mainComponent';

function App() {

  const [location, setLocation] = useState()

  useEffect(() => {
    // https://openweathermap.org/img/wn/{iconcode}@2x.png
    if( "geolocation" in navigator ){
      navigator.geolocation.getCurrentPosition( (position) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&cnt=7&appid=${process.env.REACT_APP_API_KEY}`)
          .then((response) => {
            setLocation(response.data);
          })
          .catch((err) => err);
      })
    }
  }, [])

  return (
    <Fragment>
      {location !== undefined ? 
        <Main /> : 
        <p>loading...</p>
      }
      
    </Fragment>
  );
}

export default App;
