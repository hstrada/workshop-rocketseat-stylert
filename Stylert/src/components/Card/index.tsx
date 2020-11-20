import React from 'react';

import { CardStatus, ICardProps } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  return (
    <Container>
      <Label>{amount}</Label>
      <Description>{CardStatus[status]}</Description>
    </Container>
  );
};

export default Card;
