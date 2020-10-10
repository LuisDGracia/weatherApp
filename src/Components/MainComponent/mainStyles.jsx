import styled from 'styled-components'
import { device } from "../../mediaQueries";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #100e1d;

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
`;

export const ContentContainer = styled.section`
  width: 100%;

  .copy {
    margin: 0;
    color: #ccc;
    text-align: center;
  }

  @media ${device.laptop} {
    width: 70%;
    padding: 1.1rem;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  justify-content: space-around;
`;

// |||||||||||||||||||||||||||||||||||
//            SLIDER
// |||||||||||||||||||||||||||||||||||


export const TempContainer = styled.div`
  position: relative;
  visibility: hidden;

  @media ${device.laptop}{
    visibility: visible;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 34px;
  left: 90%;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  transition: all 1s ease-in-out;

  &:checked + .slider:before {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
  }

  &:checked + .slider:after {
    background-color: white;
    color: black;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: auto;
  text-align: center;
  line-height: 30px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.4s;
  border-radius: 20px;

  :before {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    content: "°C";
    height: 30px;
    width: 30px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  :after {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    content: "°F";
    color: white;
    height: 30px;
    width: 30px;
    right: 4px;
    bottom: 4px;
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.4s;
  }
`;
