import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const AlbumLink = styled(Typography)({
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    color: 'blue',
  },
  fontSize: '0.875rem',
  marginBottom: '4px', 
});

export const UserInfo = styled(Typography)({
  fontSize: '0.875rem',
  marginBottom: '2px',
  textDecoration: 'none',
});