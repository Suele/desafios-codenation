import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import marvelLogo from '../../img/marvel-logo.jpg';

const Navbar = styled.nav`
  margin: 0 auto;
  width: 100%;
  background-color: black;
  position: absolute;
`;

const Img = styled.img`
  padding: 1em;
  margin: 0 auto;
  border-radius: 0.7em;
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
