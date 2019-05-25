import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 8px;
  margin: 0 auto;
  max-width: 500px;
`;

const TitleCard = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Card = styled.div`
  background-color: white;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 20px;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  margin: 3.5em 0 auto;

  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

const Description = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

const charactersListItem = ({ name, thumbnail, description }) => (
  <Card>
    <TitleCard key={name}> {name} </TitleCard>
    <Img src={thumbnail} alt={name} />
    <Description>{description}</Description>
    <Button>detalhes</Button>
  </Card>
);

export default charactersListItem;
