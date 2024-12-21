import { styled } from '@mui/system';
import { ListItem } from '@mui/material';

export const StyledListItem = styled(({ button, ...other }) => (
    <ListItem button={button} {...other} />
  ))({
    listStyleType: 'none',
    color: 'black',
    '&:hover': {
      color: 'blue',
    },
  });