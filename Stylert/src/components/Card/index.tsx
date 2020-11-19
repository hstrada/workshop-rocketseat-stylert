import React from 'react';

import { colors } from '../../theme/colors';

import { Container, Label, Status } from './styles';

export enum CardStatus {
  PAGO = 'pago',
  EM_ANDAMENTO = 'em andamento',
  REVERTIDO = 'revertido',
  EM_ATRASO = 'em atraso',
}

type CardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
};

interface IProps {
  amount: string;
  status: keyof typeof CardStatus;
}

const Card = ({ amount, status }: IProps) => {
  const statusVariant: CardStatusVariant = {
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
