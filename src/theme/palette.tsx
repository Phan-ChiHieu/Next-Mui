// Theme color hay nói đúng hơn là bộ color kit của dự án
// Chỉnh màu thì chỉnh ở đây => chuyên nghiệp

import { alpha } from '@mui/material/styles';

// // ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

type ColorEbookT = {
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
    custom: string;
    text: ColorEbookT;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    custom: string;
    text: ColorEbookT;
  }
  interface Palette {
    ebook: {
      text: ColorEbookT;
      button: ColorEbookT;
    };
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

// custom
const PRIMARY = {
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  contrastText: '#FFF',
  lighter: '#C8FAD6',
  darker: '#004B50',
  custom: '#000',
  text: {
    primary: 'red',
    secondary: 'blue',
    disabled: 'grey',
  },
};

const SECONDARY = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
  text: {
    primary: 'red',
    secondary: 'blue',
    disabled: 'grey',
  },
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#ffffff',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  ebook: {
    text: {
      primary: 'red',
      secondary: 'blue',
      disabled: 'grey',
    },
  },
};

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFAB00',
      neutral: GREY[900],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
    // ebook: {
    //   text: {
    //     primary: 'red',
    //     secondary: 'blue',
    //     disabled: 'grey',
    //   },
    // },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#FFFFFF',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === 'light' ? light : dark;
}
