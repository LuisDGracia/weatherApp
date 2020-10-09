import styled from 'styled-components'

export const HightlightContainer = styled.div`
  width: 80%;
  padding-top: 1.05rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
`

export const HiglightContent = styled.div`
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1e213a;
  margin-bottom: 2rem;
  padding: 1.1rem;
  border-radius: 10px;

  p {
    margin: 0;
    margin-bottom: 1.05rem;
  }

  .title {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  .data {
    margin-top: 1.05rem;
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  font-size: 1.2rem;
  text-align: center;
  line-height: 40px;

  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.3);

  ${({rotation}) => `transform: rotate(${rotation}deg);`}
`;

export const ProgressBar = styled.progress`
  appearance: none;
  width: 90%;
  margin: 0 auto;
  margin-top: 1.4rem;

  ::-webkit-progress-value {
    background: #2f80ed;
    border-radius: 10px;
  }

  ::-webkit-progress-bar {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
`;