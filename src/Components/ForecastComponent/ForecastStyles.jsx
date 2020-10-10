import styled from 'styled-components'
import { device } from "../../mediaQueries";

export const ForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;

  @media ${device.laptop} {
    width: 90%;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const Day = styled.div`
  width: 30%;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: center;
  background-color: #1e213a;
  padding: 1.05rem;
  border-radius: 10px;

  .day {
    display: inline-block;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.05em;
  }

  .day_img {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin: 0 auto;
  }

  .tempMax {
    display: inline-block;
    margin: 0;
    width: 50%;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    font-size: 1.1rem;
  }

  .tempMin {
    display: inline-block;
    margin: 0;
    width: 50%;
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
    font-size: 1.1rem;
  }

  @media ${device.laptop} {
    width: 14%;
    margin-bottom: 0px;
  }
`;
