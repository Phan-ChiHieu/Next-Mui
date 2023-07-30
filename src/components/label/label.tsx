import React, { forwardRef } from 'react';
import { LabelProps } from './types';
import { StyleLabel } from './styles';
import { useTheme } from '@mui/material/styles';

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ color = 'default', variant = 'soft', children, startIcon, endIcon, ...other }, ref) => {
    const theme = useTheme();
    return (
      <StyleLabel ref={ref} component="span" theme={theme} ownerState={{ color, variant }}>
        {children}
      </StyleLabel>
    );
  }
);

export default Label;
