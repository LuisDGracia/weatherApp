import styled from 'styled-components'

export const HightlightContainer = styled.div`
  width: 80%;
  padding-top: 1.05rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
`

export const HiglightContent = styled.div`
  width: 35%;
  height: 40%;
  background-color: #1e213a;
  margin-bottom: 2rem;
  padding: 2rem;

  p{
    margin: 0;
  }

  .title {
    font-size: 1.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  .data {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }
`;