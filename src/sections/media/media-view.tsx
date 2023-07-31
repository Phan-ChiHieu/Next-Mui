'use client';

import React, { useState } from 'react';
import { styled, alpha, useTheme, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { bgGradient, hideScroll } from '@/theme/css';

type StyledRootProps = {
  isAcitve: boolean;
  theme: Theme;
};

const StyledRoot = styled('div')<StyledRootProps>(({ isAcitve, theme }) => ({
  ...bgGradient({
    direction: '90deg',
    startColor: alpha('#090979', 0),
    endColor: alpha('#00d4ff', 0.38),
    imgUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
  color: isAcitve ? '#e57373' : '#fbc02d',
  '&:after': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '2px',
    top: 0,
    right: '60px',
    backgroundColor: '#ffd600',
  },

  [theme.breakpoints.down('md')]: {
    color: '#2962ff',
    backgroundColor: '#ffd600',
    '&:after': {
      content: '""',
      position: 'absolute',
      height: '100%',
      width: '2px',
      top: 0,
      right: '60px',
      backgroundColor: '#2962ff',
    },
  },
}));

export default function MediaView() {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);

  const handleButton = () => {
    setIsActive(!isActive);
  };
  return (
    <StyledRoot theme={theme} isAcitve={isActive}>
      <Box
        sx={{
          ...hideScroll.y,
        }}
      >
        MediaView
      </Box>
      <button onClick={() => handleButton()}>Click</button>
    </StyledRoot>
  );
}
