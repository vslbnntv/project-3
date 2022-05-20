import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { removeFav, saveFavs, selectFavorites, selectSavedId } from '../features/favorites/favoriteSlice';

const Favorites = () => {
  const [title, setTitle] = useState('');

  const favorites = useSelector(selectFavorites);
  const savedId = useSelector(selectSavedId);

  const dispatch = useDispatch();

  const handleSave = async () => {
    const response = await api.saveFavs({title, movies: favorites});
    console.log(response);
    dispatch(saveFavs(response.id));
  }

  return (
    <div>
      <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
      {favorites.map(f => {
        return (
          <div key={f.imdbID}>
            <p>{f.Title}</p>
            <button disabled={savedId} onClick={e => dispatch(removeFav(f.imdbID))}>X</button>
          </div>
        )
      })}
      {!savedId
        ? <button disabled={!title} onClick={handleSave}>Save</button>
        : <Link to={`/saved-favorite/${savedId}`} >Go to saved</Link>}

    </div>
  )
}

export default Favorites;