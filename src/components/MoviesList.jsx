import React from 'react'
import MoviesListItem from './MoviesListItem'
import styles from './Movieslist.module.css';


const MoviesList = ({ movies }) => {
  return (
    <div className={styles.hh}>
      {movies?.length
        ? movies.map(m => <MoviesListItem movie={m} key={m.imdbID} />)
        : <h1>No movies.</h1> }
    </div>
  )
}

export default MoviesList