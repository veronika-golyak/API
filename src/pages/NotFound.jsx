import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { StyledBox } from '../style/NotFound';

function NotFound() {
  return (
    <StyledBox>
      <Typography variant="h2">404</Typography>
      <Typography variant="h5">Page not found</Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Go to page: <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>Users</Link>
      </Typography>
    </StyledBox>
  );
}

export default NotFound;