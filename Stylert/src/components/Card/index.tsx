import React from 'react';

import { CardStatus, ICardProps } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  const isPaid = status === 'PAGO' ? 'success-400' : 'warning-400';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description color={isPaid}>{CardStatus[status]}</Description>
    </Container>
  );
};

export default Card;
