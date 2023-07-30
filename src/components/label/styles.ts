import Box from '@mui/material/Box';
import { Theme, styled } from '@mui/material/styles';
import { LabelColor, LabelVariant } from './types';

export const StyleLabel = styled(Box)(
  ({
    theme,
    ownerState,
  }: {
    theme: Theme;
    ownerState: {
      color: LabelColor;
      variant: LabelVariant;
    };
  }) => {
    // neu la theme sang
    const isLight = theme.palette.mode === 'light';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const softVariant = ownerState.variant === 'soft';

    const defaultStyle = {
      ...(ownerState.color === 'default' && {
        ...(filledVariant && {
          color: isLight ? theme.palette.common.white : theme.palette.grey[800],
          backgroundColor: theme.palette.text.primary,
        }),
      }),
    };

    console.log('>>>>>', defaultStyle);
    return {
      height: 24,
      minWidth: 24,
      lineHeight: 0,
      borderRadius: 6,
      cursor: 'default',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      justifyContent: 'center',
      textTransform: 'capitalize',
      padding: theme.spacing(0, 0.75),
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
      transition: theme.transitions.create('all', {
        duration: theme.transitions.duration.shorter,
      }),
      ...defaultStyle,
    };
  }
);
