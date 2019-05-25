import React from 'react';
import styled from 'styled-components';
import marvelLogo from '../../img/marvel-logo.jpg';

const Navbar = styled.nav`
  margin: 2em auto;
  background-color: black;
  position: absolute;
`;

const Img = styled.img`
  border-radius: 8px;
  width: 200px;
`;

const Nav = () => (
  <Navbar>
    <Img src={marvelLogo} alt="marvel-logo" />
  </Navbar>
);

export default Nav;
