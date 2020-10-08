import styled from 'styled-components'

export const ForecastContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-self: center;
`

export const Day = styled.div`
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: center;
  background-color: #1e213a;
  padding: 1.05rem;

  .day{
    display: inline-block;
    width: 100%;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    font-size: 1.3rem;
  }

  .day_img{
    display: inline-block;
    margin: 0 auto;
  }

  .tempMax{
    display: inline-block;
    width: 50%;
    color: rgba(255, 255, 255, 0.7);
    font-weight: bold;
    font-size: 1.1rem;
  }

  .tempMin{
    display: inline-block;
    width: 50%;
    color: rgba(255, 255, 255, 0.5);
    font-weight: bold;
    font-size: 1.1rem;
  }
`;