import React from 'react';
import { CardStatus, ICardProps, TCardStatusVariant } from './interface';

import { Container, Label, Description } from './styles';

const Card = ({ amount, status }: ICardProps) => {
  const statusVariant: TCardStatusVariant = {
    PAGO: { color: 'success-400', strikeThrough: false },
    EM_ABERTO: { color: 'warning-400', strikeThrough: false },
    EM_ATRASO: { color: 'error-400', strikeThrough: false },
    REVERTIDO: { color: 'neutral-700', strikeThrough: true },
  };

  // const isStatusReversed = status === 'REVERTIDO';

  return (
    <Container>
      <Label>{amount}</Label>
      <Description
        strikeThrough={statusVariant[status].strikeThrough}
        color={statusVariant[status].color}>
        {CardStatus[status]}
      </Description>
    </Container>
  );
};

export default Card;
