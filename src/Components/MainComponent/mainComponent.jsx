import { ContentContainer, Content, MainContainer, TempContainer, Switch, Input, Slider } from './mainStyles';
import Highlight from '../HightlightComponent/HighlightComponent';
import Forecast from '../ForecastComponent/ForecastComponent';
import Today from '../TodayComponent/TodayComponent';
import React, {useState} from "react";

function Main({ forecastInfo, weatherInfo }) {

  const [temp, setTemp] = useState(true);

  const tempHandler = () => {
    
    let nextTemp = !temp

    setTemp( nextTemp );

  }

  return (
    <MainContainer>
      <Today weatherInfo={weatherInfo} temp={temp} />

      <ContentContainer>
        <Content>

          <TempContainer>
            <Switch>
              <Input type="checkbox" className="checkbox" onClick={ tempHandler } />
              <Slider className="slider" />
            </Switch>
          </TempContainer>

          <Forecast forecast={forecastInfo} temp={temp} />
          <h2 style={{ "color": '#ccc', "marginBottom": '10px' }} >Today's Higlights</h2>
          <Highlight
            wind={weatherInfo.wind}
            humidity={weatherInfo.main.humidity}
            pressure={weatherInfo.main.pressure}
            visibility={weatherInfo.visibility}
          />
          <p className="copy" > &copy; Zuzki Made This </p>
        </Content>

      </ContentContainer>
    </MainContainer>
  );
}

export default Main
