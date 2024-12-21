import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPhotosByAlbumId, getUserById, getAlbumById } from '../utils/api';
import { Typography, Box } from '@mui/material';

function AlbumDetail() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null);
  const [albumTitle, setAlbumTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhotosAndAlbum = async () => {
      try {
        const albumData = await getAlbumById(id);
        if (!albumData) {
          navigate('/not-found');
          return;
        }

        const photosData = await getPhotosByAlbumId(id);
        console.log(`Photos for album ${id}:`, photosData); 
        setPhotos(photosData);
        setAlbumTitle(albumData.title);
        const userData = await getUserById(albumData.userId);
        setUserName(userData.name);
        setUserId(userData.id);
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/not-found');
      } finally {
        setLoading(false);
      }
    };
    fetchPhotosAndAlbum();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
        {albumTitle}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
        Created by:&nbsp;
        <Link to={`/user/${userId}`} style={{ color: 'blue', textDecoration: 'underline' }}>
          {userName}
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}>
        {photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.url} 
            alt={photo.title} 
            style={{ width: '100px', margin: '5px', display: photo.url ? 'block' : 'none' }} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.style.display = 'none'; 
            }} 
          />
        ))}
      </Box>
    </Box>
  );
}

export default AlbumDetail;