import styled from 'styled-components'
import { device } from "../../mediaQueries";

export const HightlightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;

  @media ${device.laptop} {
    width: 90%;
  }
`;

export const HiglightContent = styled.div`
  width: 80%;
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
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  .data {
    width: 100%;
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }

  .direction {
    font-size: 1.1rem;
    margin-left: 10px;
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.5);
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .text {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .text > p {
    margin: 0;
    font-size: 0.8rem;
    color: #ccc;
  }

  @media ${device.tablet} {
    width: 40%;
  }

  @media ${device.laptop} {
    width: 35%;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  font-size: 1rem;
  text-align: center;
  line-height: 30px;

  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.3);

  ${({rotation}) => `transform: rotate(${rotation-45}deg);`}
`;

export const ProgressBar = styled.progress`
  appearance: none;
  width: 100%;
  margin: 0 auto;

  ::-webkit-progress-value {
    background: #2f80ed;
    border-radius: 10px;
  }

  ::-webkit-progress-bar {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

`;