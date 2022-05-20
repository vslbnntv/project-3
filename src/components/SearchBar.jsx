import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({ onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // getting form
    const form = e.target;

    // getting form's data
    const formData = new FormData(form);
    const searchString = formData.get('search');

    // form.reset();
    // use parent's handler function to setting its state.
    onSubmit(searchString);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.src} name='search' type='search' required />
      <button className={styles.btn} type='submit'>Search</button>
    </form>
  )
};

export default SearchBar;