import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

function App() {

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })

  useEffect(() => {
    if( "geolocation" in navigator ){
      navigator.geolocation.getCurrentPosition( (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    }
  }, [])

  return (
    <Fragment>
      {console.log(location)}
    </Fragment>
  );
}

export default App;
