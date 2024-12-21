import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Albums from './pages/Albums';
import AlbumDetail from './pages/AlbumDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;