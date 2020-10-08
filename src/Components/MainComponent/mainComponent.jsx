import Today from '../TodayComponent/TodayComponent';
import { ContentContainer, Content, MainContainer } from './mainStyles';
import React from "react";
import Forecast from '../ForecastComponent/ForecastComponent';
import Highlight from '../HightlightComponent/HighlightComponent';

function Main({ forecastInfo, weatherInfo }) {

  return (
    <MainContainer>
      <Today weatherInfo={ weatherInfo }/>

      <ContentContainer>
        <Content>
          <Forecast forecast={ forecastInfo } />
          <Highlight 
            wind={ weatherInfo.wind }
            humidity={ weatherInfo.main.humidity }
            pressure={ weatherInfo.main.pressure }
            visibility={ weatherInfo.visibility } />
        </Content>
      </ContentContainer>

    </MainContainer>
  );
}

export default Main
