'use client'

import React, { useMemo } from 'react'
import merge from 'lodash/merge';
import { palette } from './palette';
import { CssBaseline, ThemeOptions, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import NextAppDirEmotionCacheProvider from './next-emotion-cache';


type Props = {
  children: React.ReactNode;
};


export default function ThemeProvider({ children }: Props) {

  const baseOption = useMemo(
    () => ({
      // palette is table color theme (light/dark)
      palette: palette('light'),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(() =>
    merge({
      baseOption
    }), [baseOption]
  )

  const theme = createTheme(memoizedValue as ThemeOptions);


  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      {/*--start:  Global reset */}
      <CssBaseline />
      {/*--end:  Global reset */}
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
