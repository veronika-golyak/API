const API_URL = 'https://jsonplaceholder.typicode.com';

const fetchData = async (endpoint) => {
  const response = await fetch(`${API_URL}${endpoint}`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export const getUsers = () => fetchData('/users');
export const getUserById = (id) => fetchData(`/users/${id}`);
export const getAlbumsByUserId = (userId) => fetchData(`/albums?userId=${userId}`);
export const getPhotosByAlbumId = (albumId) => fetchData(`/photos?albumId=${albumId}`);
export const getAlbumById = (id) => fetchData(`/albums/${id}`);