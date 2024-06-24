import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  maxWidth: '647px',
  width: '100%',
  margin: 'auto',
  padding: '24px 16px',
  boxShadow: '0 0 23.7px 18px #00000040',
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: 'white',
  [theme.breakpoints.up('md')]: {
    padding: '112px 90px',
  },
}));
