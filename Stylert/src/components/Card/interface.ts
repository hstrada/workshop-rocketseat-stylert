import { colors } from '../../theme/colors';

export interface IStyledProps {
  color: keyof typeof colors;
  strikeThrough?: boolean;
}
