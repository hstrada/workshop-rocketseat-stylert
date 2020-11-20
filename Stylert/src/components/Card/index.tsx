import React from 'react';
import { ICardProps } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  return (
    <Container>
      <Label>{amount}</Label>
      <Description>{status}</Description>
    </Container>
  );
};

export default Card;
