import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SavedFavoritesPage from './pages/SavedFavoritesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/saved-favorite/:id' element={<SavedFavoritesPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
