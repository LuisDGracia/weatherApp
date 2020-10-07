import Today from '../TodayComponent/TodayComponent';
import { Content, MainContainer } from './mainStyles';
import React from "react";
import Forecast from '../ForecastComponent/ForecastComponent';

function Main({ forecastInfo, weatherInfo }) {

  return (
    <MainContainer>
      <Today weatherInfo={ weatherInfo }/>

      <Content>
        <Forecast forecast={ forecastInfo } />
      </Content>

    </MainContainer>
  );
}

export default Main
