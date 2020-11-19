import React from 'react';
import { colors } from '../../theme/colors';

import { Container, Label, Status } from './styles';

enum CardStatus {
  PAGO = 'pago',
  EM_ANDAMENTO = 'em andamento',
  REVERTIDO = 'revertido',
  EM_ATRASO = 'em atraso',
}

export interface IStyledProps {
  color: keyof typeof colors;
  strikeThrough?: boolean;
}

type CardVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
};

interface IProps {
  amount: string;
  status: keyof typeof CardStatus;
}

const Card = ({ amount, status }: IProps) => {
  const statusVariant: CardVariant = {
    PAGO: 'success-400',
    EM_ANDAMENTO: 'warning-400',
    EM_ATRASO: 'error-400',
    REVERTIDO: 'neutral-400',
  };

  const isStatusReversed = status === 'REVERTIDO' ? true : false;

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
