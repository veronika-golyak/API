import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAlbumsByUserId, getUsers } from '../utils/api';
import { Box, Typography } from '@mui/material';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      const usersData = await getUsers(); 
      const allAlbums = await Promise.all(usersData.map(user => getAlbumsByUserId(user.id))); 
      const albumsList = allAlbums.flat(); 
      setAlbums(albumsList);
    };
    fetchAlbums();
  }, []);

  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {albums.map(album => (
          <Typography
            key={album.id}
            variant="body2"
            sx={{
              color: 'black', 
              marginBottom: 0.5, 
              '&:hover': {
                color: 'blue', 
              },
            }}
          >
            <Link 
              to={`/album/${album.id}`} 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
              }}
            >
              {album.title}
            </Link>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default Albums;

