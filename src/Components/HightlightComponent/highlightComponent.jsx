import React from 'react'
import { HightlightContainer, HiglightContent, Icon, ProgressBar } from './HightlightStyles'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Highlight({ wind, pressure, humidity, visibility }) {
  
  const windDirection = () => {
    let direction = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];

    return direction[Math.round(wind.deg/22.5)%16];
  };

  return (
    <HightlightContainer>
      <HiglightContent>
        <p className="title">Wind status</p>
        <p className="data">{`${wind.speed} m/s`}</p>
        <Icon rotation={wind.deg}>
          <FontAwesomeIcon className="center" icon={faLocationArrow} />
        </Icon>
          <p>{windDirection()}</p>
      </HiglightContent>

      <HiglightContent>
        <p className="title">Humidity</p>
        <p className="data">{`${humidity}%`}</p>
        <ProgressBar value={humidity} max={100} />
      </HiglightContent>

      <HiglightContent>
        <p className="title">Visibility</p>
        <p className="data">{`${visibility / 1000} Km`}</p>
      </HiglightContent>

      <HiglightContent>
        <p className="title">Air Pressure</p>
        <p className="data">{`${pressure} mb`}</p>
      </HiglightContent>
    </HightlightContainer>
  );
}

export default Highlight
