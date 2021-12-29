import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: 'Work Sans, sans serif',
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#cea798',
      dark: '#83605e',
      contrastText: '#0f0f0f',
    },
    secondary: {
      light: '#d9d3b3',
      main: '#adae91',
    },
    error: {
      main: '#FA4E61',
      light: '#F8F0F0',
    },
    background: {
      default: '#f2f2f2',
      paper: '#fff',
    },
    success: {
      main: '#15B36C',
    },
    grey: {
      100: '#cbcbcb',
      200: '#bebebe',
      300: '#939393',
      500: '#6b7a8f',
    },
  },
  spacing: (factor) => `${factor}rem`,
  overrides: {
    MuiButton: {
      root: {
        height: '5rem',
        minWidth: '12rem',
        margin: '0.5rem',
        fontSize: '1.4rem',
        fontFamily: 'Work Sans, sans-serif',
        padding: '1rem 3rem',
        textTransform: 'none',
      },
      containedPrimary: {
        color: '#fff',
      },
      containedSecondary: {
        color: '#fff',
      },
      outlinedSecondary: {
        '&:hover': {
          border: '1px solid rgba(255, 0, 0, 0.5)',
        },
        '&:active': {
          border: '1px solid rgba(255, 0, 0, 0.5)',
        },
        border: '1px solid rgba(255, 0, 0, 0.5)',
      },
      label: {
        textTransform: 'capitalize',
      },
      contained: {
        boxShadow: 'none !important',
      },
      sizeSmall: {
        height: '3.3rem',
        fontSize: '1.4rem',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.4rem',
      },
    },
    MuiSvgIcon: {
      root: {
        color: '#83605e',
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          zIndex: '1000',
        },
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        marginBottom: 0,
        width: '100%',
      },
    },
    MuiInputLabel: {
      outlined: {
        '&$shrink': {
          fontSize: '1.4rem',
          color: '#0F0F0F',
        },
      },
    },
  },
});
