import React from 'react';
import Button from '../Button/Button';
import thanos from '../../img/thanos.jpg';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 8px;
  margin: 0 auto;
  width: 500px;
  max-width: 500px;
`;

const TitleCard = styled.h1`
  margin: 0 auto;
  padding-top: 10px;
  font-weight: bold;
  display: block;
`;

const CardWrapper = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 5px;
  text-align: center;
  display: grid;
  grid-gap: 20px;
  align-items: stretch;
  border: 1px solid #ccc;
`;

const charactersListItem = props => (
  <CardWrapper>
    <TitleCard> character name </TitleCard>
    <Img src={thanos} alt="image thanos" />
    <Button />

    <TitleCard> character name </TitleCard>
    <Img src={thanos} alt="image thanos" />
    <Button />
  </CardWrapper>
);

export default charactersListItem;
