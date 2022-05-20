import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFav, selectSavedId } from '../features/favorites/favoriteSlice';
import styles from './moviesListItem.module.css';

const MoviesListItem = ({ movie }) => {
  const dispatch = useDispatch();
  const savedId = useSelector(selectSavedId);

  const handleClick = () => {
    dispatch(addFav(movie));
  }

  return (
    <div className={styles.listitem} style={{ display: 'flex', flexDirection: 'row' }}>
      <img src={movie.Poster} alt={movie.Title} height="200" />
      <div>
        <p>{movie.Title} - ({movie.Year})</p>
        <button className={styles.addbutton} onClick={handleClick} disabled={savedId}>Add to Favorites</button>
      </div>
    </div>
  )
}

export default MoviesListItem