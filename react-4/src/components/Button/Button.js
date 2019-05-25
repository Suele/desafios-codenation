import React from 'react';
import styled from 'styled-components';

const ButtonDetail = styled.button`
  color: palevioletred;
  margin: 0 auto;
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 0.3em;
  font-size: 1.5em;
  &:hover {
    background-color: black;
  }
  width: 100px;
  height: 40px;
`;

const Button = props => <ButtonDetail>{props.text}</ButtonDetail>;

export default Button;
