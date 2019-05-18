import React from 'react';
import styled from 'styled-components';
import marvelLogo from '../../img/marvel-logo.jpg';

const Navbar = styled.nav`
  padding: 2em;
  margin: 0em;
  background: black;
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
