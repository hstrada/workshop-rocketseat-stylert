import { colors } from '../../theme/colors';

export enum CardStatus {
  PAGO = 'pago',
  EM_ABERTO = 'em aberto',
}

export interface ICardProps {
  amount: string;
  status: keyof typeof CardStatus;
}

export interface ICardStyledProps {
  color: keyof typeof colors;
}
