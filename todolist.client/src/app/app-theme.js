import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#FF7DE2'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { padding: 0 }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          select: {
            fontSize: 20
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            fontSize: 20,
            '&::placeholder': {
              color: 'rgba(130, 130, 130, 1)',
              opacity: 1
            }
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          textAlign: 'start',
          width: '100%',
          fontFamily: 'Inter',
          fontSize: 24,
          fontWeight: 600,
          cursor: 'pointer'
        }
      }
    }
  }
});
