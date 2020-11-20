import { colors } from '../../theme/colors';

export enum CardStatus {
  PAGO = 'pago',
  EM_ANDAMENTO = 'em andamento',
  REVERTIDO = 'revertido',
  EM_ATRASO = 'em atraso',
}

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStyledProps {
  color: keyof typeof colors;
  strikeThrough: boolean;
}

export type TCardStatusVariant = {
  [key in keyof typeof CardStatus]: keyof typeof colors;
};
