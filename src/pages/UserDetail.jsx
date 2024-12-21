import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getUserById, getAlbumsByUserId } from '../utils/api';
import { Typography } from '@mui/material';
import { AlbumLink, UserInfo } from '../style/UserDetailStyles'; 

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserById(id);
        if (!userData) {
          navigate('/not-found');
          return;
        }
        const userAlbums = await getAlbumsByUserId(id);
        setUser(userData);
        setAlbums(userAlbums);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/not-found'); 
      }
    };
    fetchUserData();
  }, [id, navigate]);

  if (!user) return <div>Loading...</div>;

  const phoneNumber = user.phone.split(' x')[0];

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" style={{ marginBottom: '16px' }}>
        {user.name}
      </Typography>
      <UserInfo>Username: {user.username}</UserInfo>
      <UserInfo>Email: {user.email}</UserInfo>
      <UserInfo>Phone: {phoneNumber}</UserInfo>
      <UserInfo>
        Website: 
        <Link 
          to={`http://${user.website}`} 
          style={{ color: 'black' }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {user.website}
        </Link>
      </UserInfo>
      <Typography variant="h6" style={{ margin: '16px 0' }}>
        Albums
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px' }}>
        {albums.map(album => (
          <AlbumLink key={album.id} component={Link} to={`/album/${album.id}`}>
            {album.title}
          </AlbumLink>
        ))}
      </div>
    </div>
  );
}

export default UserDetail;

