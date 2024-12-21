import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit" component={Link} to="/">
          Users
        </Button>
        <Button color="inherit" component={Link} to="/albums">
          Albums
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;