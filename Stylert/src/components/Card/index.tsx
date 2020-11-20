import React from 'react';

import { Container, Label, Status } from './styles';

import { ICardProps, TCardStatusVariant, CardStatus } from './interface';

const Card = ({ amount, status }: ICardProps) => {
  const statusVariant: TCardStatusVariant = {
    PAGO: 'success-400',
    EM_ANDAMENTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-400',
  };

  const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Status strikeThrough={isStatusReversed} color={statusVariant[status]}>
        {CardStatus[status]}
      </Status>
    </Container>
  );
};

export default Card;
