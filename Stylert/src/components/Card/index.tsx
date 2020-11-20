import React from 'react';

import { CardStatus, ICardProps, TCardStatusVariant } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  // const isPaid = status === 'PAGO' ? 'success-400' : 'warning-400';

  const statusVariant: TCardStatusVariant = {
    PAGO: 'success-400',
    EM_ABERTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-400',
  };

  return (
    <Container>
      <Label>{amount}</Label>
      <Description color={statusVariant[status]}>
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
