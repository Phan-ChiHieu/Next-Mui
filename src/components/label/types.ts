import { BoxProps } from '@mui/material';

export type LabelColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type LabelVariant = 'filled' | 'outlined' | 'soft';

export interface LabelProps extends BoxProps {
  color?: LabelColor;
  variant?: LabelVariant;
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
}
