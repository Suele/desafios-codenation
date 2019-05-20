import React from 'react';
import styled from 'styled-components';

const ButtonDetail = styled.button`
  color: palevioletred;
  background: black
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = () => <ButtonDetail>Detalhes</ButtonDetail>;

export default Button;
