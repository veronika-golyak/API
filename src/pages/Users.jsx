import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../utils/api';
import { List, ListItemText, Container } from '@mui/material';
import { StyledListItem } from '../style/Users';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Container maxWidth="sm">
      <List>
        {users.map(user => (
          <StyledListItem key={user.id} component={Link} to={`/user/${user.id}`}>
            <ListItemText primary={user.name} />
          </StyledListItem>
        ))}
      </List>
    </Container>
  );
}

export default Users;