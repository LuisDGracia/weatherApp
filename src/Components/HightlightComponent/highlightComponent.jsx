import React from 'react'
import { HightlightContainer, HiglightContent } from './HightlightStyles'

function Highlight({ wind, pressure, humidity, visibility }) {
  // ${wind.deg}deg
  return (
    <HightlightContainer>
      <HiglightContent>
        <p className="title">Wind status</p>
        <p className="data">{`${wind.speed} m/s`}</p>
      </HiglightContent>

      <HiglightContent>
        <p className="title">Humidity</p>
        <p className="data">{`${humidity}%`}</p>
        <progress value={humidity} max={100} />
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
