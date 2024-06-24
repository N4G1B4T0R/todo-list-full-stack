import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { AppButton } from '@/shared/UI-kit/app-button/index.js';

export const ItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between',
  marginBottom: '12px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '327px',
  },
}));

export const ResponsiveButton = styled(AppButton)(({ theme }) => ({
  margin: '10px 0',
  width: '100%',
  padding: '0.6em',
  [theme.breakpoints.up('md')]: {
    width: '99px',
    margin: '0',
    height: 'fit-content',
  },
}));
