import React from 'react';
import styled from 'styled-components';

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  &:checked + span {
    background-color: #f85f73;
  }
  &:focus + span {
    box-shadow: 0 0 1px #f85f73;
  }
  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const ToggleSwitch = () => (
  <ToggleLabel htmlFor="switch-dark-mode" className="switch" role="switch">
    <Input id="switch-dark-mode" type="checkbox" role="button" />
    <Slider />
  </ToggleLabel>
);

export default ToggleSwitch;
