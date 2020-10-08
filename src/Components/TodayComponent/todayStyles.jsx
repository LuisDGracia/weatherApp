import styled from 'styled-components'

export const Container = styled.aside`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: space-evenly;
  background-color: #1E213A;
`

export const Icon = styled.img`
  width: 60%;
  display: inline-block
`

export const Temp = styled.div`

  .temp{
    font-size: 8rem;
    font-weight: bold;
    margin: 0;
    color: #fff;
    display: inline-block;
  }

  .temp_deg{
    font-size: 4rem;
    margin: 0;
    color: rgba( 255, 255, 255, 0.5);
    display: inline-block;
  }
`;

export const Weather = styled.div`
  .weather {
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const DayLocation = styled.div`
  .info {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

