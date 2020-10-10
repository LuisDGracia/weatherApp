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
        <p className="data mb-0">{`${wind.speed} m/s`}</p>
        <Icon rotation={wind.deg}>
          <FontAwesomeIcon className="center" icon={faLocationArrow} />
        </Icon>
        <p className="direction">{windDirection()}</p>
      </HiglightContent>

      <HiglightContent>
        <p className="title">Humidity</p>
        <p className="data mb-0">{`${humidity}%`}</p>
        <div style={{ "width": '80%'  }}>
          <span className="text">
            <p>0</p> <p>50</p> <p>100</p>
          </span>
          <ProgressBar value={humidity} max={100} />
        </div>
      </HiglightContent>

      <HiglightContent className="mb-0" >
        <p className="title">Visibility</p>
        <p className="data mb-0">{`${visibility / 1000} Km`}</p>
      </HiglightContent>

      <HiglightContent className="mb-0" >
        <p className="title">Air Pressure</p>
        <p className="data mb-0">{`${pressure} mb`}</p>
      </HiglightContent>
    </HightlightContainer>
  );
}

export default Highlight
