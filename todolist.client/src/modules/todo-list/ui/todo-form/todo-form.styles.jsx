import { styled } from '@mui/material/styles';
import { AppButton } from '@/shared/UI-kit/app-button/index.js';
import { Box, TextField } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
}));

export const ResponsiveButton = styled(AppButton)(({ theme }) => ({
  margin: '10px 0',
  [theme.breakpoints.up('md')]: {
    margin: '0',
  },
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '327px',
    width: '100%',
  },
}));
