import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    <Link to="/">
      <Img src={marvelLogo} alt="marvel-logo" />
    </Link>
  </Navbar>
);

export default Nav;
