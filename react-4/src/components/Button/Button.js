import React from 'react';
import styled from 'styled-components';

const ButtonDetail = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0 auto;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  font-size: 1.5em;
  &:hover {
    background-color: black;
  }
  width: 450px;
  display: block;
`;

const Button = () => <ButtonDetail>Detalhes</ButtonDetail>;

export default Button;
