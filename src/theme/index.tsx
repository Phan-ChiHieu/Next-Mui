'use client'

import React, { useMemo } from 'react'
import merge from 'lodash/merge';
import { palette } from './palette';
import { createTheme, ThemeProvider as MuiThemeProvider, ThemeOptions } from '@mui/material/styles';
import NextAppDirEmotionCacheProvider from './next-emotion-cache';
import { componentsOverrides } from './overrides';
import CssBaseline from '@mui/material/CssBaseline';


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

  // componentsOverrides ghi de css global
  theme.components = merge(componentsOverrides(theme));

  const themeWithLocale = useMemo(
    () => createTheme(theme),
    [theme]
  );


  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <MuiThemeProvider theme={themeWithLocale}>
      {/*--start:  Global reset */}
      <CssBaseline />
      {/*--end:  Global reset */}
        {children}
      </MuiThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
