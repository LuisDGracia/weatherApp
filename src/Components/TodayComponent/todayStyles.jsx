import styled from 'styled-components'
import { device } from '../../mediaQueries'

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1e213a;

  @media ${device.laptop} {
    width: 30%;
  }
`;

export const Icon = styled.img`
  width: 60%;
  display: inline-block
`

export const Temp = styled.div`
  .temp {
    font-size: 4rem;
    font-weight: bold;
    margin: 0;
    color: #fff;
    display: inline-block;
  }

  .temp_deg {
    font-size: 2rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.5);
    display: inline-block;
  }

  @media ${device.laptop} {
    .temp {
      font-size: 7rem;
    }

    .temp_deg {
      font-size: 3rem;
    }
  }
`;

export const Weather = styled.div`
  font-size: 2rem;
  display: inline-block;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
`;

export const DayLocation = styled.div`
  .info {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.3);
  }

  .location {
    font-size: 1.2rem;
    display: inline-block;
    margin-left: 10px;
    color: rgba(255, 255, 255, 0.3);
  }
`;

