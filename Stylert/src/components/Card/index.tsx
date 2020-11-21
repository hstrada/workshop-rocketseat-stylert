import React from 'react';

import { ICardProps, CardStatus, TCardStatusVariant } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  const statusVariant: TCardStatusVariant = {
    PAGO: 'success-400',
    EM_ABERTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-400',
  };

  const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description
        strikeThrough={isStatusReversed}
        color={statusVariant[status]}>
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
